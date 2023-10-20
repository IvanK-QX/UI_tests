import { APIRequestContext } from "@playwright/test"
import { ApiLoginPage } from "./apiPages/login_page"
import { ApiProfilePage } from "./apiPages/profile_page"
import { ApiLeadersPage } from "./apiPages/leader_page"
import { ApiDeleteAccountPage } from "./apiPages/deleteAccount_page"
import { ApiStreamPage } from "./apiPages/stream_page"
import { ApiGiftsPage } from "./apiPages/gifts_page"
import { ApiBlockedPage } from "./apiPages/blocked_page"
import { ApiFollowingPage } from "./apiPages/following_page"
import { ApiClientSettingsPage } from "./apiPages/clientSettings_page"
import { ApiReferalPage } from "./apiPages/referal_page"
import { ApiReportsPage } from "./apiPages/reports_page"
import { ApiMessage3003Page } from "./apiPages/message_page"

export class Api {
    apiContext: APIRequestContext
    loginPage: ApiLoginPage
    profilePage: ApiProfilePage
    leadersPage: ApiLeadersPage
    deleteAccountPage: ApiDeleteAccountPage
    streamsPage: ApiStreamPage
    giftsPage: ApiGiftsPage
    blockedPage: ApiBlockedPage
    followingPage: ApiFollowingPage
    clientSettingsPage: ApiClientSettingsPage
    referalPage: ApiReferalPage
    reportPage: ApiReportsPage
    messagePage: ApiMessage3003Page

    constructor(apiContext: APIRequestContext) {
        this.apiContext = apiContext
        this.loginPage = new ApiLoginPage(apiContext)
        this.profilePage = new ApiProfilePage(apiContext)
        this.leadersPage = new ApiLeadersPage(apiContext)
        this.deleteAccountPage = new ApiDeleteAccountPage(apiContext)
        this.streamsPage = new ApiStreamPage(apiContext)
        this.blockedPage = new ApiBlockedPage(apiContext)
        this.giftsPage = new ApiGiftsPage(apiContext)
        this.followingPage = new ApiFollowingPage(apiContext)
        this.clientSettingsPage = new ApiClientSettingsPage(apiContext)
        this.referalPage = new ApiReferalPage(apiContext)
        this.reportPage = new ApiReportsPage(apiContext)
        this.messagePage = new ApiMessage3003Page(apiContext)
    }
}