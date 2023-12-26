export default async (habitData) => {
  try {
    const response = await fetch(
      `https://ascend-server.onrender.com/api/habits/trackHabit`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(habitData),
      }
    );
  } catch (error) {
    console.log(error);
  }
};
