import SCard from "./style";

export default function Card() {
  return (
    <SCard>
      <img
        src="https://thumbs.static-thomann.de/thumb/thumb220x220/pics/prod/334572.webp"
        alt="guitare"
      />
      <div className="infos">
        <h2>Label</h2>
        <h4>brand</h4>
        <p>price</p>
      </div>
    </SCard>
  );
}
