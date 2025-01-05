import React, { useState } from "react";

const SearchButton = () => {
  const [findString, setFindString] = useState("");

  const people = [
    { name: "Akkddxcd Wshjqqh", age: 46, gender: "Male" },
    { name: "Bkgfg Xdfjocvpd", age: 58, gender: "Female" },
    { name: "Cnooh Xzfvyfv", age: 20, gender: "Female" },
    { name: "Dkpuqvc Tlfjrlz", age: 53, gender: "Male" },
    { name: "Elgtwtey Xhtvkdb", age: 35, gender: "Male" },
    { name: "Fzxsyu Sqgcbzgha", age: 36, gender: "Female" },
    { name: "Gmcazlpo Phktcxrbr", age: 30, gender: "Male" },
    { name: "Hgtjyaj Qypbal", age: 47, gender: "Male" },
    { name: "Ingsa Ntovkbvr", age: 35, gender: "Male" },
    { name: "Jciqk Ckoqtqg", age: 50, gender: "Female" },
    { name: "Knblok Axuukufwa", age: 59, gender: "Male" },
    { name: "Lbyls Wnygpbvw", age: 39, gender: "Male" },
    { name: "Mpsxz Vpggxxbn", age: 55, gender: "Male" },
    { name: "Nfeubymz Tweucwusy", age: 39, gender: "Male" },
    { name: "Odtwe Rvfbebw", age: 51, gender: "Male" },
    { name: "Pesmjnep Kysjcntyp", age: 38, gender: "Male" },
    { name: "Qssksg Uutpgkwj", age: 47, gender: "Female" },
    { name: "Ranqyt Heffvi", age: 37, gender: "Female" },
    { name: "Szenp Mepxtz", age: 38, gender: "Female" },
    { name: "Tszpn Fuyftmquu", age: 45, gender: "Male" },
    { name: "Upvpk Eanvzntp", age: 45, gender: "Male" },
    { name: "Vidkbexi Dyeipq", age: 54, gender: "Male" },
    { name: "Wxufm Rxkhbje", age: 46, gender: "Male" },
    { name: "Xtxkdz Phjzlj", age: 56, gender: "Male" },
    { name: "Yaomboeg Pgxvhmsu", age: 32, gender: "Male" },
    { name: "Zpkwx Xjkemdabl", age: 47, gender: "Female" },
    { name: "Aocjkvq Ghigyxa", age: 20, gender: "Male" },
    { name: "Bvldby Enklayq", age: 45, gender: "Female" },
    { name: "Cmxwtle Edgpdqeqg", age: 53, gender: "Female" },
    { name: "Drnbcbx Htcqtf", age: 22, gender: "Female" },
    { name: "Emdxl Npnzxdho", age: 44, gender: "Male" },
    { name: "Fztdxkkk Hbjsppdzm", age: 31, gender: "Female" },
    { name: "Gawnqwib Cuhdfowqo", age: 52, gender: "Female" },
    { name: "Hgcnilpu Vtzjlx", age: 29, gender: "Female" },
    { name: "Iefkhjwn Dcpuzlgvz", age: 22, gender: "Female" },
    { name: "Jhxwlne Onlhbw", age: 51, gender: "Male" },
    { name: "Kcowk Bwgdqa", age: 23, gender: "Female" },
    { name: "Lcgrj Jbtatj", age: 23, gender: "Female" },
    { name: "Mrepkwq Evqulhv", age: 55, gender: "Female" },
    { name: "Nzsfobwo Kqemrqmf", age: 45, gender: "Female" },
    { name: "Oqvrt Rxhfjont", age: 50, gender: "Male" },
    { name: "Pgxfl Adqaepv", age: 54, gender: "Male" },
    { name: "Qcldd Zsvcouiv", age: 27, gender: "Male" },
    { name: "Rlqlqd Dzsvwvmpa", age: 28, gender: "Male" },
    { name: "Sporxetx Svtcfghkj", age: 33, gender: "Female" },
    { name: "Tkiff Ppbjubmt", age: 23, gender: "Female" },
    { name: "Umeqqwb Gpprywn", age: 58, gender: "Female" },
    { name: "Vtxffg Dpjjckeoi", age: 57, gender: "Male" },
    { name: "Wdauffou Fpunhe", age: 48, gender: "Male" },
    { name: "Xbskekny Xbcvdokcm", age: 26, gender: "Male" },
    { name: "Yiuch Gxlkattzg", age: 27, gender: "Male" },
    { name: "Zlowj Tyoltfsz", age: 55, gender: "Female" },
    { name: "Awjuppg Ydugmcbr", age: 37, gender: "Female" },
    { name: "Bbtmxmc Xeqnbb", age: 47, gender: "Female" },
    { name: "Crydv Pefihkwq", age: 38, gender: "Male" },
    { name: "Dwylrnqu Dprmgn", age: 35, gender: "Female" },
    { name: "Ezvzp Nzgzdsbtm", age: 26, gender: "Male" },
    { name: "Fhmlhjvk Ddrutdtx", age: 24, gender: "Female" },
    { name: "Gxnsxqxn Rrooesxg", age: 35, gender: "Male" },
    { name: "Hxxhe Ywykquvjc", age: 60, gender: "Male" },
    { name: "Infmjna Mkoobdky", age: 29, gender: "Female" },
    { name: "Jkmapdzf Vphcahbm", age: 37, gender: "Female" },
    { name: "Kfsumtwb Hyagku", age: 48, gender: "Male" },
    { name: "Lownmuq Henmrl", age: 53, gender: "Male" },
    { name: "Mqsthvqh Pewxgvr", age: 48, gender: "Male" },
    { name: "Nwhoitg Bqghkto", age: 25, gender: "Female" },
    { name: "Ofplsj Iyqlovgj", age: 28, gender: "Female" },
    { name: "Pzcpk Msswnojwc", age: 31, gender: "Female" },
    { name: "Qsztdc Sjpntk", age: 40, gender: "Male" },
    { name: "Rervfmqx Wowjlqy", age: 49, gender: "Female" },
    { name: "Slqopdm Gwttmdjwt", age: 59, gender: "Female" },
    { name: "Tmtbbv Hgpeuff", age: 56, gender: "Male" },
    { name: "Ugyldhhq Vrrqyhj", age: 48, gender: "Male" },
    { name: "Vtfrn Njbbstsni", age: 48, gender: "Male" },
    { name: "Wrcbju Wfewlam", age: 27, gender: "Female" },
    { name: "Xbgee Kmecfg", age: 22, gender: "Female" },
    { name: "Ystpcm Retifcbm", age: 37, gender: "Female" },
    { name: "Zslinzb Guiadecf", age: 30, gender: "Male" },
    { name: "Aflklpp Jtewcldo", age: 25, gender: "Female" },
    { name: "Byyoqxyc Moyuqqgqo", age: 57, gender: "Male" },
    { name: "Chhpmatj Jcyjprl", age: 49, gender: "Female" },
    { name: "Dgcssi Sfljpdqs", age: 42, gender: "Male" },
    { name: "Ezkag Phgjecz", age: 22, gender: "Female" },
    { name: "Fqcvef Kjdsepc", age: 54, gender: "Male" },
    { name: "Gkhnbtna Xdmabb", age: 28, gender: "Male" },
    { name: "Hnjnoxc Ghldamvnx", age: 35, gender: "Female" },
    { name: "Inbjdl Axmrwf", age: 28, gender: "Male" },
    { name: "Jhtncy Teqfzm", age: 26, gender: "Female" },
    { name: "Kzfkn Zkfcbappx", age: 46, gender: "Female" },
    { name: "Lbxylrkg Galghw", age: 28, gender: "Male" },
    { name: "Msabug Bilrycdko", age: 34, gender: "Male" },
    { name: "Nwbeufy Xhpuxq", age: 20, gender: "Female" },
    { name: "Ovmio Dmzcpgvg", age: 53, gender: "Female" },
    { name: "Plkoosch Ejlmwxpbq", age: 47, gender: "Female" },
    { name: "Qgovupe Zfbcxxwy", age: 39, gender: "Female" },
    { name: "Rnvnr Qhespqpch", age: 35, gender: "Male" },
    { name: "Selchoo Xswknvoj", age: 44, gender: "Female" },
    { name: "Tmemburn Elxbxaak", age: 53, gender: "Male" },
    { name: "Uyxzbd Pkpsrmtf", age: 21, gender: "Male" },
    { name: "Vzzkto Mxqfvrs", age: 28, gender: "Male" },
  ];

  const submitHandler = (e) => {
    setFindString(e.target.value);
  };

  const filterProducts = people.filter((items) =>
    items.name.toLowerCase().startsWith(findString.toLowerCase())
  );

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          gap: "10px",
        }}
      >
        <input
          value={findString}
          onChange={(e) => submitHandler(e)}
          type="text"
          placeholder="Type to search..."
        />
        <button>Search</button>
      </div>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        {findString &&
          filterProducts.map((e, index) => <h1 key={index}>{e.name}</h1>)}
      </div>
    </div>
  );
};

export default SearchButton;
