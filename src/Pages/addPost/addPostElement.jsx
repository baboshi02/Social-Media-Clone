import React, { useState, useRef } from "react";
import { auth } from "../../firebase";
import { Button } from "../../components/regButton";
import { useNavigate } from "react-router-dom";
import { submitAdd } from "../../utils/submitAdd";
import { debounce } from "../../utils/debounce";
export const AddPostElement = () => {
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState("");
  const [titleValue, setTitleValue] = useState("");
  const inputForm = useRef();
  const values = { titleValue, formValue };
  const debouncedSubmitAdd = debounce(() => {
    submitAdd(auth, values, navigate);
  }, 600);
  return (
    <div className=" my-2 text-black">
      <form
        onSubmit={(e) => {
          if (formValue.length > 200) {
            alert("post must be less than 200 characters");
            return;
          }
          e.preventDefault();
          debouncedSubmitAdd(auth, values, navigate);
        }}
      >
        <div>
          <input
            required
            type="text"
            placeholder="Title"
            name="title"
            className="bg-slate-300 rounded mb-2 border border-primaryColor  "
            autoFocus
            onChange={(e) => setTitleValue(e.target.value)}
          />
        </div>
        <textarea
          className="resize-none bg-slate-300 rounded-md p-1 border  border-gray-500"
          required
          name="text"
          onChange={(e) => setFormValue(e.target.value)}
          cols="30"
          rows="10"
          ref={inputForm}
          placeholder="Post..."
        />
        <div>
          <Button>add post</Button>
          {formValue.length > 200 && (
            <h1 className="text-red-500">
              Post length is too long must be less than 200 characters
            </h1>
          )}
        </div>
      </form>
    </div>
  );
};
