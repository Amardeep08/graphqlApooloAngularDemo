const platforms = [];

module.exports = {
  Query: {
    // message: (_, { id }) => messages[id],
    GetPlatform: () => platforms
  },
  Mutation: {
    AddPlatformAsync: (_, { text }) => {
      const message = { id: platforms.length, text };
      messages.push(message);
      return message;
    }
  }
};