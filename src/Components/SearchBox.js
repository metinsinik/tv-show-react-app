import React, {useState} from "react";
import { Input } from "semantic-ui-react";

const SearchBox = (props) => {
  const [keyword, setKeyword] = useState("");
  const onSearch = () => {
    props.onSearch(keyword);
  };
  const onChange = (event, data) => {
    setKeyword(data.value);
  }
  return (
    <div style = { {"padding": "14px 0 14px 0"} }>
      <Input
        action={{
          icon: "tv",
          onClick: () => {
            onSearch();
          },
        }}
        placeholder="Search TV Series"
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBox;
