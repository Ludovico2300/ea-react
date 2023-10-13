import { useEffect, useState } from "react";
import { databaseData } from "../../firebase";
import { ref, onValue, set, update, remove } from "firebase/database";
import { Card } from "../../type.df";

export default function useDatabaseFirebase() {
  const [cards, setCards] = useState<Card[]>([]);

  //READ DATABASE
  useEffect(() => {
    onValue(ref(databaseData), (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        setCards(data.cards);
      }
    });
  }, []);

  //WRITE DATABASE
  const writeToDatabase = async (
    database: any,
    endpoint: string,
    identifierEndpoint: any,
    newData: Card
  ) => {
    set(ref(database, endpoint + identifierEndpoint), {
      id: newData.id,
      source: newData.source,
      tag: newData.tag,
      date: newData.date,
      title: newData.title,
      content: newData.content,
    });
  };

  //UPDATE DATABASE
  const updateDatabase = async (
    database: any,
    endpoint: string,
    identifierEndpoint: any,
    newData: Card
  ) => {
    update(ref(database, endpoint + identifierEndpoint), {
      id: newData.id,
      source: newData.source,
      tag: newData.tag,
      date: newData.date,
      title: newData.title,
      content: newData.content,
    });
  };
  //DELETE FROM DATABASE
  const deleteFromDatabase = async (
    database: any,
    endpoint: string,
    identifierEndpoint: any
  ) => {
    remove(ref(database, endpoint + identifierEndpoint));
  };

  return { cards, writeToDatabase, updateDatabase, deleteFromDatabase };
}
