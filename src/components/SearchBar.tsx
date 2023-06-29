import React from "react";
import { MDBInput } from "mdb-react-ui-kit";

interface Props {
    handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
    searchQuery: string;
}

const SearchBar: React.FC<Props> = (props: Props) => {
    return (
        <MDBInput
            label="Enter product name"
            id="typeText"
            type="text"
            value={props.searchQuery}
            onChange={props.handleSearch}
        />
    );
};

export default SearchBar;
