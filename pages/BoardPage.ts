import { Page, Locator } from '@playwright/test';

export class BoardPage {
  readonly page: Page;
  readonly addIssue: Locator;
  readonly issueTitle: Locator;
  readonly createIssueButton: Locator;
  readonly backlogIssueCard: Locator;
  readonly inProgressIssueCard: Locator;
  readonly selectedForDevelopment: Locator;
  readonly message: Locator;
  readonly createdCard: Locator;
  readonly selectedForDevelopmentIssueCard: Locator;
  readonly issueStatus: Locator;
  readonly selectedForDevelopmentStatus: Locator;
  readonly inProgressStatus: Locator;
  readonly doneStatus: Locator;
  readonly closeIssueModalButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.addIssue = page.locator('//app-navbar-left//i[contains(@class,"plus")]');
    this.issueTitle = page.locator('//add-issue-modal//label[contains(text(),"summary")]/following-sibling::input');
    this.createIssueButton = page.locator('//add-issue-modal//button[@type="submit"]');
    this.message = page.locator('#message');
    this.backlogIssueCard = page.locator('//div[@id="Backlog"]/issue-card');
    this.inProgressIssueCard = page.locator('//div[@id="InProgress"]/issue-card');
    this.selectedForDevelopmentIssueCard = page.locator('//div[@id="Backlog"]/issue-card');
    this.selectedForDevelopment = page.locator('#Selected');
    this.createdCard = page.locator('//issue-card//p[contains(text(),"milos")]//parent::div');
    this.issueStatus = page.locator('//issue-status//button');
    this.selectedForDevelopmentStatus = page.locator('span:has-text("Selected for Development")')
    this.inProgressStatus = page.locator('span:has-text("In Progress")')
    this.doneStatus = page.locator('span:has-text("Done")')
    this.closeIssueModalButton = page.locator('//issue-detail//j-button[@icon="times"]//button')


    
  }

  async goToBoard(): Promise<void> {
    await this.page.goto('https://jira.trungk18.com/project/board');
  }

  async createTask(title: string): Promise<void> {
    await this.clickOnAddIssueButton();
    await this.issueTitle.fill(title);
    await this.clickOnCreateIssueButton();
  }

  async clickOnAddIssueButton(): Promise<void> {
    await this.addIssue.click();
  }

  async clickOnCreateIssueButton(): Promise<void> {
    await this.createIssueButton.click();
  }

  async openCreatedIssue(): Promise<void> {
    await this.createdCard.click();
  }

  async clickIssueStatus(): Promise<void> {
    await this.issueStatus.click();
  }

  async chooseDevelopmentInProgress(): Promise<void> {
    await this.inProgressStatus.first().click();
  }

  async closeIssueModal(): Promise<void> {
    await this.closeIssueModalButton.click();
  }

  async moveCardFromBacklogToSelectedForDevelopment(): Promise<void> {
    await this.createdCard.dragTo(this.selectedForDevelopment);
  }

  async getMessage(): Promise<Locator> {
    return this.message;
  }
}