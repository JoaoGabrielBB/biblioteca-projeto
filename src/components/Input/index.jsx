import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  .search {
    display: flex;
    align-items: center;
    text-align: center;
    margin: 0 4.5em 0 3.1em;
  


  }

  .search__input {
    font-family: inherit;
    font-size: inherit;
    border: 1px solid #767676;
    color: #767676;
    padding: 1px 1px 1px 1px;
    border-radius: 16px;
    margin-right: -2.5rem;
    height: 30px;
    width: 10rem;

  @media (min-width: 1024px) {
    height: 3rem;
    width: 50rem;
  }
  }

  .search__input::-webkit-input-placeholder {
    font-weight: 400;
    color: #767676;
    font-size: 14px;
  }

  .search__button {
    border: none;
    background-color: #fff;
    margin-top: 0.1em;
  }

  .search__button:hover {
    cursor: pointer;
  }

  .search input:focus {
    outline: none;
  }
`;


const Input = () => {
  return (
    <StyledWrapper>
      <div className="search">
        <input placeholder="Pesquisar" className="search__input" type="text" />
        <button className="search__button">
          <svg viewBox="0 0 16 16" className="bi bi-search" fill="currentColor" height={16} width={16} xmlns="http://www.w3.org/2000/svg">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
        </button>
      </div>
    </StyledWrapper>
  );
}


export default Input;
