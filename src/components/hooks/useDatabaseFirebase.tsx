import { useEffect, useState } from "react";
import { databaseData } from "../../firebase";
import { ref, onValue, set } from "firebase/database";
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
  const writeToDatabase = async (database: any, endpoind: string, plusEndpoint: any, data: Object) => {
    set(ref(database, 'cards/' + plusEndpoint), {

    })
  }

  return { cards, writeToDatabase };
}
