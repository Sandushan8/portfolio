import { Experience } from "./screen/experience/Experience";
import { Layout } from "./screen/layout/Layout";
import { Myself } from "./screen/mySelf/Myself";
import { Skills } from "./screen/skills/Skills";

function App() {
  return (
    <div className="font-roboto">
      <Layout>
        <Myself />
        <Skills />
        <Experience />
      </Layout>
    </div>
  );
}

export default App;
