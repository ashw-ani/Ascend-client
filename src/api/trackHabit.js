export default async (habitData) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_URL}/api/habits/trackHabit`,
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
