import Twit from "twit";
// import { twitterConfig } from './config';

export const twitterConfig = {
  consumer_key: "YOUR_TWITTER_CONSUMER_KEY",
  consumer_secret: "YOUR_TWITTER_CONSUMER_SECRET",
  access_token: "YOUR_TWITTER_ACCESS_TOKEN",
  access_token_secret: "YOUR_TWITTER_ACCESS_TOKEN_SECRET",
  timeout_ms: 60 * 1000, // optional HTTP request timeout in milliseconds
};
const twitterClient = new Twit(twitterConfig);

// export const openaiConfig = {
//   apiKey: "YOUR_OPENAI_API_KEY",
// };

export async function fetchTweets(
  username: string,
  count: number
): Promise<string[]> {
  try {
    const tweets: any = await twitterClient.get("statuses/user_timeline", {
      screen_name: username,
      count,
      tweet_mode: "extended",
    });

    return tweets.data.map((tweet: any) => tweet.full_text);
  } catch (error) {
    console.error("Error fetching tweets:", error);
    throw error;
  }
}
