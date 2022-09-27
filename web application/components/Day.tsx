

export default function Day({ day }:any) {
    console.log(day)
  return (
    <div className="flex flex-col border border-gray-200">
      <header className="flex flex-row items-center justify-evenly">
            {day.map((index) => (
                <div>
                    <p className="mt-1">
                    {index.format("ddd").toUpperCase()}
                    </p>
                    <p>
                    {index.format("DD")}
                    </p>
                    <p className="m-11">
                        12AM slot
                    </p>
                    <p className="m-11">
                        12PM slot
                    </p>
                </div>
            ))}
      </header>
    </div>
  );
}