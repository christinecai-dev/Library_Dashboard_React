import { useState } from "react";

function LibraryDashboard() {
  const [searchTerm, setSearchTerm] = useState("");

  const patron = {
    firstName: "Emma",
    lastName: "Johnson",
    libraryCardNumber: "LIB-98765",
    email: "emma.johnson@email.com",
    memberSince: 2019,
    isActive: true,
    hasLateFees: true,
    lateFeeAmount: 3.5,
    booksCheckedOut: [
      {
        id: 1,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        dueDate: "March 10, 2024",
        isOverdue: true,
        category: "Fiction",
      },
      {
        id: 2,
        title: "Sapiens",
        author: "Yuval Noah Harari",
        dueDate: "March 18, 2024",
        isOverdue: false,
        category: "Non-Fiction",
      },
      {
        id: 3,
        title: "1984",
        author: "George Orwell",
        dueDate: "March 12, 2024",
        isOverdue: true,
        category: "Fiction",
      },
      {
        id: 4,
        title: "Educated",
        author: "Tara Westover",
        dueDate: "March 20, 2024",
        isOverdue: false,
        category: "Biography",
      },
    ],
    favoriteGenres: ["Fiction", "History", "Biography"],
    booksReadThisYear: 24,
    readingGoal: 30,
  };

  const yearsAsMember = new Date().getFullYear() - patron.memberSince;
  const progress = (patron.booksReadThisYear / patron.readingGoal) * 100;
  const overdueBooks = patron.booksCheckedOut.filter((book) => book.isOverdue);
  const sortedBooks = [...patron.booksCheckedOut].sort(
    (a, b) => new Date(a.dueDate) - new Date(b.dueDate)
  );
  const filteredBooks = sortedBooks.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  let progressColor = "green";
  if (progress < 30) progressColor = "#dc2626";
  if (progress >= 30 && progress < 70) progressColor = "#d97706";
  if (progress >= 70) progressColor = "#16a34a";

  const cardStyle = {
    border: "1px solid #e5e7eb",
    borderRadius: "10px",
    padding: "16px",
    marginBottom: "16px",
    backgroundColor: "#fff",
    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
  };

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial",
        maxWidth: "700px",
        backgroundColor: "#f8fafc",
        color: "#1f2937",
      }}
    >
      <div style={cardStyle}>
        <h2>Patron Info</h2>
        <p>
          <strong>Name:</strong> {patron.firstName} {patron.lastName}
        </p>
        <p>
          <strong>Email:</strong> {patron.email.toLowerCase()}
        </p>
        <p>
          <strong>Card #:</strong> {patron.libraryCardNumber}
        </p>
        <p>
          <strong>Member Since:</strong> {patron.memberSince} ({yearsAsMember} years)
        </p>
        <p>
          <strong>Status:</strong>{" "}
          <span style={{ color: patron.isActive ? "#166534" : "#991b1b", fontWeight: "bold" }}>
            {patron.isActive ? "✅ Active Member" : "❌ Inactive"}
          </span>
        </p>
        {patron.hasLateFees && (
          <p style={{ color: "#b91c1c", fontWeight: "bold" }}>
            Late Fee: ${patron.lateFeeAmount.toFixed(2)}
          </p>
        )}
      </div>

      <div style={cardStyle}>
        <h2>Reading Progress</h2>
        <p>
          {patron.booksReadThisYear} / {patron.readingGoal} books
        </p>
        <div
          style={{
            width: "100%",
            height: "16px",
            backgroundColor: "#e5e7eb",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: "100%",
              backgroundColor: progressColor,
            }}
          />
        </div>
        {patron.booksReadThisYear >= patron.readingGoal && (
          <p style={{ color: "#166534", fontWeight: "bold", marginTop: "10px" }}>
            🎯 Goal Reached!
          </p>
        )}
      </div>

      <div style={cardStyle}>
        <h2>Checked Out Books</h2>
        <input
          type="text"
          placeholder="Search books by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: "100%",
            padding: "8px",
            marginBottom: "12px",
            borderRadius: "5px",
            border: "1px solid #d1d5db",
            backgroundColor: "#ffffff",
            color: "#111827",
            caretColor: "#111827",
          }}
        />
        {filteredBooks.map((book) => (
          <p key={book.id} style={{ margin: "8px 0" }}>
            • {book.title} by {book.author} (Due: {book.dueDate}){" "}
            {book.isOverdue && <strong style={{ color: "#b91c1c" }}>⚠️ OVERDUE</strong>}
          </p>
        ))}
        {filteredBooks.length === 0 && <p>No books match your search.</p>}
        <p>
          <strong>Overdue Count:</strong> {overdueBooks.length}
        </p>
      </div>
    </div>
  );
}

export default LibraryDashboard;
