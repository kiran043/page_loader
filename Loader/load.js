import React, { useState, useEffect } from "react";
import axios from "axios";
import "./load.css";
import Lod from "../Image/loader.gif"; //here you can insert any git image or png
export const Load = () => {
  const [textItem, setTextItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const Loader = async () => {
    try {
      const data = await axios
        .get("https://api.lyrics.ovh/v1/Coldplay/ Adventure of a Lifetime")
        .then((res) => {
          console.log(res);
          setTextItem(res.data.lyrics);
        });
      setLoading(true);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    Loader();
  }, []);
  return (
    <div>
      <h1>
        {loading ? (
          <div style={{ margin: "15rem" }}>
            <b>{textItem}</b>
          </div>
        ) : (
          <div className="text-center modals">
            <div
              className="card border-0 shadow-lg p-3 mb-5 bg-white rounded"
              style={{ width: "110px", height: "110px" }}
            >
              <img src={Lod} />
            </div>
          </div>
        )}
      </h1>
    </div>
  );
};
