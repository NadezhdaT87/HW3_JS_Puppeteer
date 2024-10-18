let page;

beforeEach(async () => {
  page = await browser.newPage();
});

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {
  beforeEach(async () => {
    await page.goto("https://github.com/team");
  });
  test("The h1 header content'", async () => {
    jest.setTimeout(7000);
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector("h1");
    const title2 = await page.title();
    expect(title2).toEqual("GitHub: Where the world builds software · GitHub");
  });

  test("The first link attribute", async () => {
    jest.setTimeout(7000);
    const actual = await page.$eval("a", (link) => link.getAttribute("href"));
    expect(actual).toEqual("#start-of-content");
  });

  test("The page contains Sign in button", async () => {
    jest.setTimeout(7000);
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, (link) => link.textContent);
    expect(actual).toContain("Sign up for free");
  });
});

test("Title on GitHab Copilot page", async () => {
  await page.goto("https://github.com/features/copilot");
  jest.setTimeout(7000);

  const title = await page.title();
  const expected = "GitHub Copilot · Your AI pair programmer · GitHub";
  expect(title).toEqual(expected);
});

test("Title on CI/CD page", async () => {
  await page.goto("https://github.com/solutions/use-case/ci-cd");
  jest.setTimeout(7000);

  const title = await page.title();
  const expected = "A Complete CI/CD Solution | GitHub · GitHub";
  expect(title).toEqual(expected);
});

test("Title on price page", async () => {
  await page.goto("https://github.com/pricing");
  jest.setTimeout(7000);

  const title = await page.title();
  const expected = "Pricing · Plans for every developer · GitHub";
  expect(title).toEqual(expected);
});
