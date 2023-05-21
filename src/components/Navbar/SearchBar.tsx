import { component$ } from "@builder.io/qwik";
import { LuSearch } from "@qwikest/icons/lucide";

const SearchBar = component$(() => {
  return (
    <form
      preventdefault:submit
      onSubmit$={() => {
        alert("you submitted the data");
      }}
    >
      <div class="hidden md:flex items-center border rounded-md border-gray-300/30 bg-gray-300/30 w-[300px]">
        <button class="py-1 px-2 text-sm" type="submit">
          <LuSearch class="text-lg text-white" />
        </button>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="search..."
          class="py-1 px-2 rounded-r-md w-full text-gray-900 bg-gray-200/30 border-none focus:outline-none focus:ring-0 placeholder:text-sm placeholder:text-gray-700"
        />
      </div>
    </form>
  );
});

export default SearchBar;
