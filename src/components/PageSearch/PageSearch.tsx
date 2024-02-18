'use client';

import { useState } from "react";
import Search from "../Search/Search";

const PageSearch = () => {
    const [roomTypeFilter, setRoomTypeFilter] = useState("");
    const [searchQuerry, setSearchQuerry] = useState("");

  return (
    <Search
      roomTypeFilter={roomTypeFilter}
      searchQuerry={searchQuerry}
      setRoomTypeFilter={setRoomTypeFilter}
      setSearchQuerry={setSearchQuerry}
    />
  );
};

export default PageSearch;
