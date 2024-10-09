import { CopilotPopup } from "@copilotkit/react-ui";



export default function Home() {
  return (
    <>
    <main className="pt-20">
      <section className="px-20">
        Social Media sites
      </section>
    </main>
      <CopilotPopup
        instructions={"You are assisting the user as best as you can. Ansewr in the best way possible given the data you have."}
        labels={{
          title: "Mini Bot",
          initial: "Need any help?",
        }}
      />
    </>
  )
}