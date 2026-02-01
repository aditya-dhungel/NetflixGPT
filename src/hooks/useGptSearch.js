import { useDispatch } from "react-redux";
// import openai from "../utils/openAi";
import ai from "../utils/geminiApi";
import { API_OPTIONS } from "../utils/constants";
import {
  addGptMovieResult,
  setGptLoading,
  setGptError,
} from "../utils/gptSlice";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

/*
  WHY THIS HOOK WAS MADE:
  - GptSearchBar was getting too large and cluttered
  - All side-effects (GPT + TMDB + Redux) are moved here
*/

const useGptSearch = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);

  //search the movies returned by gemini api inside tmdb api
  const searchMoviesTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        encodeURIComponent(movie) +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();

    // Return ONLY the most relevant match
    // return json.results?.length ? [json.results[0]] : [];
    return json.results;
  };

  // const searchMoviesTMDB = async (movie) => {
  //   const data = await fetch(
  //     "https://api.themoviedb.org/3/search/movie?query=" +
  //       movie +
  //       "&include_adult=false&language=en-US&page=1",
  //     API_OPTIONS
  //   );
  //   const json = await data.json();
  //   return json.results;
  // };



  //Openai/gemini gpt search functionality
  const handleGptSearch = async (query) => {
    // if empty search
    if (!query) {
      dispatch(setGptError(lang[langKey].emptySearchError));
      return;
    }

    try {
      dispatch(setGptLoading(true));

      console.log(query);

      const gptQuery =
        'Suggest up to 10 movies (if asked specifically about certian movie/movies than give specific results only otherwise give upto 10 results) based on the following user query: "' +
        query +
        '". Return ONLY the movie names, comma-separated, with no numbering, no explanations, and no extra text. Example: Inception, Interstellar, The Matrix';

      //OPENAI API
      // const gptResults = await openai.chat.completions.create({
      //   messages: [{role: "user", content: gptQuery}],
      //   model: "gpt-5.2",
      // });

      //openai api didn't work, used gemini api instead
      const gptResults = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: gptQuery,
      });

      if (!gptResults?.text) {
        throw new Error("No response from AI");
      }

      // console.log(gptResults.output_text);
      // console.log(gptResults.choices);
      console.log(gptResults.text);

      const gptMovies = gptResults.text.split(",").map((movie) => movie.trim());

      //gives movie list in array
      console.log(gptMovies);

      //Search each movie in tmdb api
      const promiseArray = gptMovies.map((movie) => searchMoviesTMDB(movie));
      // here the map function will execute by calling all api's immediately but data won;t be fetched instantly, it will return 10 promises for 10 movies instead
      // promises: [Promise, Promise, Promise, Promise, Promise, Promise, Promise, Promise, Promise, Promise, Promise,]

      const tmdbResults = await Promise.all(promiseArray);
      console.log(tmdbResults);

      //adding gpt search movies to redux store
      dispatch(
        addGptMovieResult({
          movieNames: gptMovies,
          movieResults: tmdbResults,
        })
      );
    } catch (error) {
      // console.error("GPT search failed", error);
      dispatch(
        setGptError(
          "We couldn’t fetch movie suggestions right now. Please try again."
        )
      );
    } finally {
      //STOP shimmer (ALWAYS runs)
      dispatch(setGptLoading(false));
    }
  };

  return { handleGptSearch };
};

export default useGptSearch;
