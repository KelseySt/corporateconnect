import CompletionCard from "../components/CompletionCard";

export default function Profile() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Profile</h1>
      <section>Avatar</section>
      <section>
        <h2 className="center-text">Overview</h2>
        <div className="grid grid-cols-3 ">
          <CompletionCard></CompletionCard>
          <CompletionCard></CompletionCard>
          <CompletionCard></CompletionCard>
        </div>
      </section>
      <section>Achievements</section>
      <footer></footer>
    </div>
  );
}
