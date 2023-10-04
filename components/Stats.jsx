

async function getData(){
  const data = await fetch(process.env.BASE_URL + "StatList");

  if(!data.ok) throw new Error("Stat data calling failed");

  return data.json();
}

const Stats = async () => {
  const { followers,  solved , customers, projects } = await getData();

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
      
          <div className="mb-8 w-full md:w-1/2 lg:w-1/4 text-center">
            <span className="mb-6 inline-block p-4 rounded bg-green-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="currentColor"
                className="w-6 h-6 text-green-600"
              >
                <path
                  fillRule="evenodd"
                  d="M41.254 14.164c0-3.31 2.683-5.993 5.993-5.993 3.31 0 5.993 2.683 5.993 5.993 0 2.307-1.055 4.398-2.716 5.8 4.147 1.564 7.19 5.685 7.19 10.518 0 6.627-5.373 12-12 12-6.628 0-12-5.373-12-12 0-4.833 3.043-8.954 7.19-10.518a5.967 5.967 0 00-2.716-5.8zM21 87h58a2 2 0 002-2V40.628c0-8.234-6.645-14.882-14.882-14.882h-4.236a17.894 17.894 0 00-5.572-7.295A12 12 0 0041 6a12 12 0 00-10.31 18.45A17.893 17.893 0 0025.462 26H21a2 2 0 00-2 2v45a2 2 0 002 2zM35.172 24H41v5.828a2 2 0 002 2H52v5.172a2 2 0 002 2H63v5.828a2 2 0 002 2H74v9.328a16.05 16.05 0 00-7.238-1.71c-8.074 0-14.64 6.566-14.64 14.64V86H35V24zm-1.883-2H22a2 2 0 00-2 2v52a2 2 0 002 2h11V21.117a15.885 15.885 0 00-.711-.119A15.902 15.902 0 0033.29 22zM14 41.058V88a2 2 0 002 2h64a2 2 0 002-2V41.058A15.98 15.98 0 0080 40a16 16 0 00-16-16H36a16 16 0 00-16 16c0 .533.032 1.059.075 1.582a15.978 15.978 0 00-1.958 5.476z"
                  clipRule="evenodd"
                />
              </svg>
            </span>

            <h3 className="text-2xl font-bold">{followers}</h3>
            <p className="text-gray-500">Followers</p>
          </div>
          <div className="mb-8 w-full md:w-1/2 lg:w-1/4 text-center">
            <span className="mb-6 inline-block p-4 rounded bg-green-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="currentColor"
                className="w-6 h-6 text-green-600"
              >
                <path
                  fillRule="evenodd"
                  d="M70.854 18.146a2 2 0 010 2.828l-36 36a2 2 0 01-2.828 0l-20-20a2 2 0 112.828-2.828L32 52.172l34.146-34.146a2 2 0 012.708-.146z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M49 7a42 42 0 100 84 42 42 0 000-84zm0 76a34 34 0 100-68 34 34 0 000 68z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <h3 className="text-2xl font-bold">{solved}</h3>
            <p className="text-gray-500">Solved Problems</p>
          </div>
          <div className="mb-8 w-full md:w-1/2 lg:w-1/4 text-center">
            <span className="mb-6 inline-block p-4 rounded bg-green-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="currentColor"
                className="w-6 h-6 text-green-600"
              >
                <path
                  fillRule="evenodd"
                  d="M55.012 23.554a.5.5 0 01-.332.152c-.135 0-.259-.05-.357-.152l-7.5-7.5a.5.5 0 010-.707l2.12-2.12a.5.5 0 01.708 0L50 21.794l6.021-6.02a.5.5 0 01.708 0l2.12 2.12a.5.5 0 010 .707l-7.5 7.5zM74 57h-7v5.813l-4.593-4.594a1 1 0 00-1.414 0l-2.832 2.832-2.293-2.293a1 1 0 00-1.414 0L49 63.813V58H42a2 2 0 00-2 2v29a2 2 0 002 2h34a2 2 0 002-2V59a2 2 0 00-2-2zM34 59a2 2 0 00-2-2H20a2 2 0 00-2 2v27a2 2 0 002 2h12V59zm-9.293-6.293a1 1 0 011.414 0l2.293 2.293 2.832-2.832a1 1 0 011.414 0l4.593 4.594V57H28.707l-7.5-7.5-7.5 7.5H12V23a2 2 0 012-2h32a2 2 0 012 2v29h-6.793l-7.5 7.5-7.5-7.5H4v31a2 2 0 002 2h16a2 2 0 002-2V59z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <h3 className="text-2xl font-bold">{customers}</h3>
            <p className="text-gray-500">Happy Customers</p>
          </div>
          <div className="mb-8 w-full md:w-1/2 lg:w-1/4 text-center">
            <span className="mb-6 inline-block p-4 rounded bg-green-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="currentColor"
                className="w-6 h-6 text-green-600"
              >
                <path
                  fillRule="evenodd"
                  d="M61.348 28.172a5 5 0 01-3.535-3.536l-6.828 6.828a5 5 0 010 7.071 5 5 0 01-7.071 0l-6.828-6.828a5 5 0 01-3.536-3.536 5 5 0 010-7.07l6.828-6.829a5 5 0 017.07 0 5 5 0 010 7.07L47.394 28.171l6.828 6.828 6.829-6.828 3.536 3.536a5 5 0 010 7.071 5 5 0 01-7.071 0l-3.536-3.536-6.828 6.828-6.828-6.828 6.828-6.828a5 5 0 013.536-3.536 5 5 0 017.071 0l6.828 6.828-6.828 6.828-6.828-6.828a5 5 0 01-3.536-3.536 5 5 0 010-7.071l6.828-6.828 6.828 6.828 3.536-3.536a5 5 0 017.071 0 5 5 0 010 7.071l-3.536 3.536-6.828-6.828-6.829 6.828-3.535-3.536a5 5 0 01-1.036-1.865z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M51.5 95a45 45 0 100-90 45 45 0 000 90zm0-4a41 41 0 100-82 41 41 0 000 82z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <h3 className="text-2xl font-bold">{projects}</h3>
            <p className="text-gray-500">Projects</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Stats;
