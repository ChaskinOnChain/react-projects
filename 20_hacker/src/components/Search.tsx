type Props = {
  inputValue: string;
  setInputValue: (e: string) => void;
};

function Search({ inputValue, setInputValue }: Props) {
  return (
    <div>
      <input
        className="border-b-4 border-b-slate-400 w-[40rem] bg-slate-100 uppercase px-5 py-3 tracking-widest text-lg mb-16"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
}

export default Search;
