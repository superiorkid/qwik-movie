import { component$ } from "@builder.io/qwik";
import IcTwotoneSearch from "~/components/icons/IcTwotoneSearch";

const SearchBar = component$(() => {
  return (
    <form
      preventdefault:submit
      onSubmit$={() => {
        alert("feature not ready");
      }}
    >
      <div class="hidden md:flex items-center border rounded-md border-gray-300/30 bg-gray-300/30 w-[300px]">
        <button class="py-1 px-2 text-sm" type="submit" id="btn-search">
          <IcTwotoneSearch class="text-lg text-white" />
        </button>
        <input
          type="search"
          name="search"
          id="search"
          disabled
          placeholder="search..."
          class="py-1 px-2 rounded-r-md w-full text-gray-900 bg-gray-200/30 border-none focus:outline-none focus:ring-0 placeholder:text-sm placeholder:text-gray-700"
        />
      </div>
    </form>
  );
});

export default SearchBar;
