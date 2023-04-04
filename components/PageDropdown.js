import React from 'react';
import { Dropdown } from 'react-bootstrap';

const PageDropdown = ({ pages }) => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        Pages
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {pages.map((page) => (
          <Dropdown.Item key={page.id} href={page.uri}>
            {page.title}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default PageDropdown;
