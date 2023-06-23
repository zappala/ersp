export function Bar(props) {
  return (
    <div className="p-10 bg-yellow justify-center text-3xl font-bold">
      {props.children}
    </div>
  );
}

export function BlueButton(props) {
  return (
    <a href={props.link} target="_blank">
      <button className="bg-gray-100 hover:bg-gray-200 font-semibold py-0 px-5 border border-gray-400 rounded shadow">
        {props.children}
      </button>
    </a>
  );
}
