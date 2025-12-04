import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import UserOverview from "./components/UserOverview";
import UserRequest from "./components/UserRequest";
import SearchFriends from "./components/SearchFriends";
import { useNavigate, useLocation } from "react-router-dom";

export default function Friendspage() {
  const navigate = useNavigate();
  const location = useLocation();
  const initialQuery = new URLSearchParams(location.search).get("q") || "";

  const [query, setQuery] = useState(initialQuery);
  const [showSearch, setShowSearch] = useState(Boolean(initialQuery));

  useEffect(() => {
    const q = new URLSearchParams(location.search).get("q") || "";
    setQuery(q);
    setShowSearch(Boolean(q));
    console.log("[Friendspage] location.search:", location.search, "query:", q);
  }, [location.search]);

  const handleSubmit = (e) => {
    e?.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) {
      setShowSearch(false);
      navigate("/friends", { replace: true });
      return;
    }
    navigate(`/friends/search?q=${encodeURIComponent(trimmed)}`);
    setShowSearch(true);
  };

  return (
    <div className="p-5 font-sans">
      <form onSubmit={handleSubmit} className="relative max-w-lg mb-6">
        <input
          id="search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="searchbar searchtext w-full pl-10"
          placeholder="Search a user"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 text-sm px-3 py-1 rounded bg-blue-600 text-white"
        >
          Search
        </button>
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
      </form>

      {showSearch && <SearchFriends query={query} />}

      <div className="flex flex-col lg:flex-row justify-evenly gap-10 pt-10">
        <div>
          <h1 className="font-bold text-[30px]">Your Friends</h1>
          <UserOverview />
        </div>

        <div>
          <h1 className="font-bold text-[30px]">Friend Requests</h1>
          <UserRequest />
        </div>
      </div>
    </div>
  );
}
