import { render, screen } from "@testing-library/react";
import { http, HttpResponse } from "msw";
import server from "../../tests/mock-api-server";

import RandomQuote from "../RandomQuote";

describe("RandomQuote", () => {
  beforeEach(() => {
    server.use(
      http.get("https://api.quotable.io/quotes/random", () => {
        return HttpResponse.json([
          {
            _id: "2i4ILvPHXsgJ",
            content:
              "If you accept the expectations of others, especially negative ones, then you never will change the outcome.",
            author: "Michael Jordan",
            tags: ["Change", "Wisdom"],
            authorSlug: "michael-jordan",
            length: 107,
            dateAdded: "2019-08-16",
            dateModified: "2023-04-14",
          },
        ]);
      })
    );
  });

  it("renders a quote", async () => {
    render(<RandomQuote />);

    expect(
      await screen.findByText(/If you accept the expectations of others/)
    ).toBeInTheDocument();
  });
});
