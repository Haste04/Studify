import React, { useEffect, useState } from "react";

export default function SearchFriends({ query = "", onAdd }) {
  const [q, setQ] = useState(query || "");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const localUsers = [
    {
      id: 1,
      name: "Haggai Estavilla",
      subject: "Programming",
      icon: "/woman-user-circle-icon.svg",
    },
    {
      id: 2,
      name: "Christian Kyle Ducay",
      subject: "Biology",
      icon: "/man-user-circle-icon.svg",
    },
    {
      id: 3,
      name: "Jhon Rosell Talisic",
      subject: "Calculus",
      icon: "/man-user-circle-icon.svg",
    },
    {
      id: 4,
      name: "Aaron Bigno",
      subject: "Physics",
      icon: "/woman-user-circle-icon.svg",
    },
  ];

  const normalize = (s = "") =>
    s.toString().trim().replace(/\s+/g, " ").toLowerCase();

  useEffect(() => {
    console.log("[SearchFriends] prop query:", query);
    setQ(query || "");
  }, [query]);

  useEffect(() => {
    // For debugging: show all users when q is empty so you can verify UI
    if (!q || !q.trim()) {
      setResults(localUsers);
      setLoading(false);
      return;
    }

    setLoading(true);
    const t = setTimeout(() => {
      const nq = normalize(q);
      console.log("[SearchFriends] running search for:", q, "=>", nq);

      const tokens = nq.split(" ").filter(Boolean);
      const filtered = localUsers.filter((u) => {
        const hay = normalize(`${u.name} ${u.subject}`);
        return tokens.every((tok) => hay.includes(tok));
      });

      console.log(
        "[SearchFriends] filtered:",
        filtered.map((r) => r.name)
      );
      setResults(filtered);
      setLoading(false);
    }, 200);

    return () => clearTimeout(t);
  }, [q]);

  const handleAdd = (id) => {
    setResults((prev) =>
      prev.map((u) => (u.id === id ? { ...u, requested: true } : u))
    );
    if (onAdd) onAdd(id);
  };

  return (
    <div className="w-full max-w-xl">
      <div className="mb-3">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search results..."
          className="w-full border rounded px-3 py-2"
        />
      </div>

      {loading && <div className="text-sm text-gray-500">Searching…</div>}
      {!loading && results.length === 0 && q && (
        <div className="text-sm text-gray-500">No results for “{q}”.</div>
      )}

      <div className="flex flex-col gap-3 mt-2">
        {results.map((u) => (
          <div
            key={u.id}
            className="flex items-center justify-between p-3 border rounded"
          >
            <div className="flex items-center gap-3">
              <img
                src={u.icon}
                alt={u.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <div className="font-semibold">{u.name}</div>
                <div className="text-sm text-gray-500">{u.subject}</div>
              </div>
            </div>
            <div>
              {u.requested ? (
                <button className="px-3 py-1 rounded bg-gray-200 text-gray-700 cursor-not-allowed">
                  Requested
                </button>
              ) : (
                <button
                  onClick={() => handleAdd(u.id)}
                  className="px-3 py-1 rounded bg-blue-600 text-white"
                >
                  Add
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
