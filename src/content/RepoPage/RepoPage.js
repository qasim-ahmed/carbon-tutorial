import React from 'react';
import { Search } from '@carbon/react';

const RepoPage = () => {
  return (
    <div>
      REPO PAGE
      <Search
        closeButtonLabelText="Clear search input"
        defaultValue=""
        id="search-1"
        placeholder="Type your search here"
        labelText="Search"
        onChange={function noRefCheck() {}}
        onKeyDown={function noRefCheck() {}}
        size="lg"
      />
    </div>
  );
};

export default RepoPage;
