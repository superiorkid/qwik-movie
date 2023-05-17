import { component$, useSignal } from "@builder.io/qwik";
import { LuSearch } from "@qwikest/icons/lucide";

const SearchBar = component$(() => {
  const search = useSignal<string>("");

  return (
    <form
      preventdefault:submit
      onSubmit$={() => {
        alert("you submitted the data");
      }}
    >
      <div class="hidden md:flex items-center border rounded-md bg-gray-300 w-[300px]">
        <button class="py-1 px-2 text-sm" type="submit">
          <LuSearch class="text-lg text-white" />
        </button>
        <input
          type="search"
          name="search"
          id="search"
          bind:value={search}
          placeholder="search..."
          class="py-1 px-2 rounded-r-md w-full text-gray-900 bg-gray-200 border-none focus:outline-none focus:ring-0 placeholder:text-sm "
        />
      </div>
    </form>
  );
});

export default SearchBar;
