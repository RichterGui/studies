import { Post } from "./Post";
import { Header } from "./components/Header";

import "./styles.css";

function App() {
  return (
    <div>
      <Header />
      <Post
        author="John Doe"
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos dolorem architecto, fugiat illo ipsa a saepe aspernatur cum, aliquid eveniet sequi ullam laborum facere corrupti, sit voluptatibus modi. Quos, nesciunt!"
      />
    </div>
  );
}

export default App;
