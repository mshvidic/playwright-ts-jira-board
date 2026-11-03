import { test, expect } from '@playwright/test';
import { BoardPage } from '../pages/BoardPage';

test('@smoke add task', async ({ page }) => {

  const boardPage = new BoardPage(page);

  await boardPage.goToBoard();
  await boardPage.createTask('milos');
  await expect(boardPage.backlogIssueCard).toContainText(['milos']);
});

test('check card is moved from backlog to ready for development', async ({ page }) => {

  const boardPage = new BoardPage(page);

  await boardPage.goToBoard();
  await boardPage.createTask('milos');
  await expect(boardPage.backlogIssueCard).toContainText(['milos']);
  await boardPage.openCreatedIssue();
  await boardPage.clickIssueStatus();
  await boardPage.chooseDevelopmentInProgress();
  await boardPage.closeIssueModal();
  await expect(boardPage.backlogIssueCard).not.toContainText(['milos']);
  await expect(boardPage.inProgressIssueCard).toContainText(['milos']);
});

