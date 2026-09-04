import content from "@/content.json";

function BookList({ books }: { books: { title: string; author: string }[] }) {
  return (
    <ul className="space-y-2">
      {books.map((book) => (
        <li key={book.title} className="text-sm leading-6">
          <span className="text-ink">{book.title}</span>
          <span className="text-muted"> — {book.author}</span>
        </li>
      ))}
    </ul>
  );
}

export default function BookshelfPage() {
  return (
    <section className="space-y-10">
      <h1 className="text-base text-ink">Bookshelf</h1>

      <div className="space-y-3 border-t border-line pt-5">
        <h2 className="text-sm text-muted">currently reading</h2>
        <BookList books={content.bookshelf.currentlyReading} />
      </div>

      <div className="space-y-3 border-t border-line pt-5">
        <h2 className="text-sm text-muted">favorites</h2>
        <BookList books={content.bookshelf.favorites} />
      </div>
    </section>
  );
}
