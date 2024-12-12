import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";

import useFetch from "./hooks/useFetch";
import { useState } from "react";

export default function App() {
  const [search, setSearch] = useState("inspection");

  const { data, error, loading } = useFetch(search);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-700 flex flex-col items-center justify-center p-4">
      {loading ? (
        <Progress value={33} />
      ) : (
        <>
          <div className="mb-6">
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for a movie"
              className="w-80 px-4 py-2 text-white font-bold rounded border border-gray-300"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl">
            {data.map((movie) => (
              <Card key={movie.imdbID} className="w-full">
                <CardContent className="p-4">
                  <img
                    src={movie.Poster}
                    alt={`${movie.Title} poster`}
                    className="w-full h-40 object-cover mb-2 rounded"
                  />
                  <h3 className="font-bold text-lg text-dark">{movie.Title}</h3>
                  <p className="text-md text-dark">{movie.Year}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
