function Slide({ title, description, isLeftToRight }: { title: string, description: string, isLeftToRight: boolean }) {
  return (
    <div className={`p-17 h-full flex items-center ${isLeftToRight || "flex-row-reverse"}`}>
      {/* left side */}
      <aside className="flex flex-col items-start gap-6 w-[720px]">
        <h5>{title}</h5>

        <p className="body-20 medium description">{description}</p>

        <button className="button banner">
          Descover
        </button>
      </aside>

      {/* right side */}
      <aside></aside>
    </div>
  )
}

export default Slide