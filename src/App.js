import "./App.css";
import Data from "./stosck.json";
import { useState, useEffect } from "react";
import {
  AiOutlinePlus,
  AiOutlineCaretDown,
  AiOutlineCaretUp,
} from "react-icons/ai";
import {MdDeleteForever} from 'react-icons/md'
import { useSelector, useDispatch } from "react-redux";
import allActions from "../src/ReduxStore/allAction";
// this my comment
// //this is my 2nd comment
function App() {
  const dispatch = useDispatch();

  const [dataQ, setDataQ] = useState();

  const [input, setInput] = useState({
    query: "",
  });

  const [show, setShow] = useState([]);

  const find = (val) => {
    const res = selected?.find((ele) => ele[0] === val[0]);

    if (res === undefined) return false;
    else return true;
  };

  const add = (post) => {
    {
      const match = selected?.find((ele) => ele[0] === post[0]);

      console.log("match: ", match);

      if (match) {
        return null;
      } else {
        dispatch(allActions.watchlistAction.addData(post));
      }
    }

    clear();
  };

  const remove = (post) => {
    dispatch(allActions.watchlistAction.removeData(post));
    clear();
  };

  const onInputChange = (value, name) => {
    setInput({ ...input, [name]: value });

    if (value === "") {
      setDataQ(selected);
    } else {
      setDataQ(Data);
    }
  };

  const selected = useSelector((state) => {
    return state.watchlistReducer;
  });

  useEffect(() => {
    setDataQ(selected);
  }, [selected]);

  const clear = () => {
   
    setInput({
      query: "",
    })
    setDataQ([])
  }

  return (
    <div className="h-screen w-screen flex flex-col items-center">
      <div
        id="inputdiv"
        className="w-20 h-20 flex justify-center items-center px-4"
      >
        <input
          className="searchbar px-1"
          type="text"
          value={input?.query}
          placeholder="Search..."
          onChange={(e) => onInputChange(e.target.value, "query")}
        />
        <button className="searchbtn cursor-pointer" onClick={clear}>Clear</button>
      </div>

      <div>
        {dataQ
          ?.filter((value) => {
            if (input?.query === "") {
              return value;
            } else if (
              value[0].toLowerCase().includes(input?.query.toLowerCase())
            ) {
              return value;
            }
          })
          .map((post) => {
            const z = (post[1] - post[2]).toFixed(2);

            return (
              <div
                onMouseEnter={() => setShow(post)}
                onMouseLeave={() => setShow([])}
              >
                <div className="stocklist">
                  <div className="px-4 h-full flex  justify-between item-center">
                    <div className="w-48  flex flex-col justify-center items-center text-sm">
                      <p style={{ color: z < 0 ? "red" : "rgb(49, 209, 21)" }}>
                        {post[0].split("::")[0].toString()}
                      </p>
                      <p style={{ color: z < 0 ? "red" : "rgb(49, 209, 21)" }}>
                        {post[0].split("::")[1].toString()}
                      </p>
                    </div>

                    <div className="w-48 h-full flex flex-col justify-center items-center text-sm">
                      <div
                        style={{
                          color: z < 0 ? "red" : "rgb(49, 209, 21)",
                        }}
                        className=" h-6 flex flex-col justify-end "
                      >
                        {post[1]}
                      </div>
                      <div className=" h-8 flex  items-center text-sm border border-gray-500 p-1">
                        <div>
                          {z < 0 ? (
                            <AiOutlineCaretDown />
                          ) : (
                            <AiOutlineCaretUp />
                          )}
                        </div>
                        <div className="ml-2">
                          {" "}
                          <p>{`${z} %`}</p>
                        </div>
                      </div>
                    </div>

                    <div className="absolute w-2/5 px-6 h-full ml-4 mt-6  z-10 flex justify-end">
                      {show[0] === post[0] && (
                        <div>
                          {!find(post) ? (
                            <button onClick={() => add(post)}>
                              <AiOutlinePlus/>
                            </button>
                          ) : (
                            <button onClick={() => remove(post)}>
                              <MdDeleteForever/>
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
