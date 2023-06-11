import React, { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '../Popper';
import useDebounce from '../../hooks/useDebounce';
import Tippy from '@tippyjs/react/headless';
function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setshowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const debounced = useDebounce(searchValue, 500);

    const inputRef = useRef()
    //moi khi nguoi dung search 
    //gan api vao test search 
    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([]);
            return;
        }
        //setLoading(true);
        //có 2 cách
        //fech
        // axios và import, i axios (npm not 0.2.0)... XMLHttpRequest



        // setTimeout(()=>{
        //             setSearchResult([1,2,3,1]);
        //            // setSearchResult([]);
        // },0);
        //fetch('https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent{debounced}}&type=less')
        fetch(`http://localhost:1812/api/users/find/${searchValue}`)
            .then((res) => res.json())
            .then((res) => {
                setSearchResult(res.data);
                setLoading(false);
            })
            .catch(() => {
                 setLoading(false);
            })
    }, [debounced]);
    const handClear = () => {
        setSearchResult([]);
        setSearchValue('');
        inputRef.current.focus();
    }
    const handleHideResult = () => {
        setshowResult(false);
    }

    return (
        <Tippy

            interactive
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div
                    className="search__result"
                    tabIndex="-1"
                    id={attrs.id}
                    role={attrs.role}
                >
                    <PopperWrapper>
                        <h4 className="search__title">Accounts</h4>
                        {searchResult.map((result) => (
                            <div>
                                {result}
                            </div>
                        ))}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className="search__header" >
                <input placeholder="Search accounts and food"
                    ref={inputRef}
                    value={searchValue}
                    spellCheck="false"
                    onChange={e => setSearchValue(e.target.value)}
                    onfocus={() => setshowResult(true)}
                />

                {!!searchValue && !loading && (
                    <button
                        className="clear__btn"
                        onClick={() => {
                            setSearchValue('');
                            inputRef.current.focus();
                        }}
                    >
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}

                {loading && <FontAwesomeIcon icon={faSpinner} className='loading' />}


                <button className="search__btn">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        </Tippy>
    );
}

export default Search;