
import { BrowserRouter, Route, Switch } from "react-router-dom";



function App() {
  const [data, setData] = useState([]);
  const [update, setUpdate] = useState([]);

  const changeShelf = (book, e) => {
    console.log(`book to be sent:${book}, to the shelf:${e.key}`);
    api.update(book, e.key).then((res) => {
      console.log(res);
      setUpdate(res);
    });
  };

  const warning = () => {
    console.log("Already belongs to this shelf");
  };

  useEffect(() => {
    api
      .getAll()
      .then((res) => {
        let info = res;
        setData(info);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [update]);

  console.log(data);

  return (
    <Layout>
      <Header style={{ textAlign: "center", fontSize: "2rem", color: "white" }}>
        My Reads
      </Header>
      <Content>
        <Books
          data={data}
          changeShelf={changeShelf}
          warning={warning}
          update={update}
        />
      </Content>
    </Layout>
  );
}

export default App;
