import React from "react";
import { Item, Rating } from "semantic-ui-react";

const SearchResultContainer = ({ results }) => {
  const CustomItem = ({ item, index }) => {
    return (
      <Item style={{ border: "solid", margin: "0px", padding: "20px", borderWidth: "thin", background: index % 2 === 0 ? "rgb(218 218 218)" : "whitesmoke" }}>
        <Item.Content>
          <Item.Header as="a">{item.show.name}</Item.Header>
          <br/>
          <Rating icon='star' disabled defaultRating={item.show.rating.average && Math.round(item.show.rating.average/2) || 0 } maxRating={5} />
        </Item.Content>
        <Item.Image size="tiny" style={{ boxShadow: "10px 5px 5px #777070", marginTop:"14px" }} src={item.show.image && item.show.image.medium || ""}/>
        <Item.Content>
          <Item.Meta style={{fontSize:"12px"}} dangerouslySetInnerHTML={{ __html: item.show.summary } }></Item.Meta>
          <Item.Description style={{fontSize:"12px"}}><b>Premiered:</b>  {item.show.premiered}</Item.Description>
          <Item.Description style={{fontSize:"12px"}}><b>Genres:</b>  {item.show.genres.map(genre => <span>{" #" + genre }</span>)}</Item.Description>
          <Item.Extra style={{fontSize:"12px"}}>Source: <a target="_blank" href={item.show.url}>{ item.show.url}</a></Item.Extra>
        </Item.Content>
      </Item>
    )
  }
  return (
    <>
      <Item.Group>
        {results.map((item, index) => {
          return (
            <CustomItem key={index} index={index} item={item}></CustomItem>
          )
        })
        }
      </Item.Group>
    </>
  );
};

export default SearchResultContainer;
