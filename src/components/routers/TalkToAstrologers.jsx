import { Typography } from '@material-ui/core'
import React, { useState ,useEffect} from 'react'
import { Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core';
import astro from '../../files/astro';
import sear from '../../images/pics/search.png';
import sort from '../../images/pics/sort.png';
import filter from '../../images/pics/filter.png';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@material-ui/icons//Search';

function TalkToAstrologers() {
    const [astrologers, setAstrologers] = useState(astro);
    const [searchbar, setSearchbar] = useState(true);
    const [sortby, setSortby] = useState(false);
    const [search,setSearch] = useState("");
    const [filteredArr,setFilteredArr]=useState(astrologers);
    const displaySearchbar = () => {
        setSearchbar(!searchbar);
    }
    const setSearchBox=(e)=>{
        const val=e.target.value;
        console.log(val);
        let filteredArr=astrologers.filter(function(obj){
            let fullName=obj.firstName+" "+obj.lastName;
            fullName=fullName.trim();
            return fullName.includes(val);
        })
        console.log(filteredArr);
        if(val==""){
            filteredArr=astrologers;
        }
        setSearch(val);
        setFilteredArr(filteredArr);
    }
    const displaySortBy = () => {
        setSortby(!sortby);
    }
    let useStyles = makeStyles({
        flex: {
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "end",
            height: "2rem",
            justifyContent: "space-between",
            width: "10rem"
        },
        height: {
            height: "inherit"
        },
        filterBar: {
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            alignItems: "center"
        },
        signs: {
            minWidth: "30rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        },
        button: {
            backgroundColor: "#e97d31",
            height: "1.5rem",
            borderRadius: "5px",
            padding: "8px 23px",
            color: "white",
            width: "12rem",
            fontSize: "20px"
        },
        talkNow: {
            width: "100%",
        },
        rates: {
            width: "3rem",
            fontWeight: "bold"
        },
        blockSort: {
            display: "block"
        },
        noSort: {
            display: "none"
        }
    })
    let classes = useStyles();
    return (
        <div style={{marginTop:"3rem"}}>
            <div className={classes.filterBar}>
                <div style={{ fontWeight: "bold" }}>
                    Talk to an Astrologer
                </div>
                <div className={classes.flex}>
                    <img onClick={displaySearchbar} className={classes.height} src={sear} alt="Logo" />
                    <img onClick={displaySortBy} className={classes.height} src={filter} alt="Logo" />
                    <img className={classes.height} src={sort} alt="Logo" />
                </div>
            </div>
            <div style={{ position: "absolute", right: "20px" }} className={sortby == true ? classes.blockSort : classes.noSort}>
                <div style={{ color: "#e97d31" }}>Sort By</div>
                <hr />
                <div><input type="radio" id="sortChoice1"
                    name="sort" value="email" />
                    <label for="sortChoice1">Experience-high to low</label></div>
                <div><input type="radio" id="sortChoice2"
                    name="sort" value="email" />
                    <label for="sortChoice2">Experience-low to high</label></div>
                <div><input type="radio" id="sortChoice3"
                    name="sort" value="email" />
                    <label for="sortChoice3">Price-high to low</label></div>
                <div><input type="radio" id="sortChoice4"
                    name="sort" value="email" />
                    <label for="sortChoice4">Price-low to high</label></div>

            </div>
            {searchbar == true ? <div>
                <Paper
                    component="form"
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                >
                    <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                    <input
                    onChange={setSearchBox}
                    value={search}
                        style={{
                            width: "90%",
                            border: "1px solid",
                            height: "2rem",
                            fontSize: "15px"
                        }}
                        placeholder="Search Astrologer"
                    />
                </Paper>
            </div> : <></>}
            <div>
                {filteredArr.map(function (astrologer) {
                    return (
                        <Paper className={classes.signs}>
                            <img style={{ height: "22rem" }} src={astrologer.images.medium.imageUrl} alt="" />
                            <div>
                                <div style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    width: "55rem"
                                }}>
                                    <div style={{ fontWeight: "bold" }}>
                                        {astrologer.firstName + " " + astrologer.lastName}
                                    </div>
                                    <div className={classes.ratings}>
                                        {astrologer.rating}
                                    </div>
                                </div>
                                <Typography style={{ display: "flex", width: "36rem", justifyContent: "flex-start" }} variant="body2" gutterBottom component="div">
                                    {astrologer.aboutMe} Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit illo ad aspernatur, error adipisci expedita sit sint repellendus ratione, ex fugit maxime magnam nisi maiores ut. Cum sunt iste laborum!
                                </Typography>
                                <Typography style={{ display: "flex", width: "36rem", justifyContent: "flex-start" }} variant="body2" gutterBottom component="div">
                                    English,Hindi
                                </Typography>
                                <div className={classes.talkNow}>
                                    <div className={classes.rates}>
                                        Rs.{astrologer.minimumCallDurationCharges}/min
                                    </div>
                                    <div className={classes.button}>
                                        Talk on Call
                                    </div>
                                </div>
                            </div>
                        </Paper>
                    )
                })}

            </div>
        </div>
    )
}

export default TalkToAstrologers
