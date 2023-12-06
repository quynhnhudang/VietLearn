document.addEventListener('DOMContentLoaded', function () {
    const lessonsContainer = document.getElementById('lessons');
    const lessonIndexContainer = document.getElementById('lessonIndex');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');

    let currentLessonIndex = 0;

    const lessons = [
        {
            title: "Lesson 1: Greetings",
            phrases: [
                { english: "Hello", vietnamese: "Xin chào" },
                { english: "Good morning", vietnamese: "Chào buổi sáng" },
                { english: "Good afternoon", vietnamese: "Chào buổi chiều" },
                { english: "Good evening", vietnamese: "Chào buổi tối" },
                { english: "How are you?", vietnamese: "Bạn khỏe không?" }
            ]
        },
        {
            title: "Lesson 2: Numbers",
            phrases: [
                { english: "One", vietnamese: "Một" },
                { english: "Two", vietnamese: "Hai" },
                { english: "Three", vietnamese: "Ba" },
                { english: "Four", vietnamese: "Bốn" },
                { english: "Five", vietnamese: "Năm" }
            ]
        },
        {
            title: "Lesson 3: Family",
            phrases: [
                { english: "Mother", vietnamese: "Mẹ" },
                { english: "Father", vietnamese: "Bố" },
                { english: "Brother", vietnamese: "Anh em trai" },
                { english: "Sister", vietnamese: "Chị em gái" },
                { english: "Grandparents", vietnamese: "Ông bà" }
            ]
        },
        {
            title: "Lesson 4: Colors",
            phrases: [
                { english: "Red", vietnamese: "Đỏ" },
                { english: "Blue", vietnamese: "Xanh lam" },
                { english: "Green", vietnamese: "Xanh lá cây" },
                { english: "Yellow", vietnamese: "Vàng" },
                { english: "Purple", vietnamese: "Tím" }
            ]
        },
        {
            title: "Lesson 5: Food and Drinks",
            phrases: [
                { english: "Water", vietnamese: "Nước" },
                { english: "Rice", vietnamese: "Cơm" },
                { english: "Chicken", vietnamese: "Gà" },
                { english: "Coffee", vietnamese: "Cà phê" },
                { english: "Vegetables", vietnamese: "Rau củ" }
            ]
        },
        // Add more lessons as needed
    ];

    function renderAllLessons() {
        let allLessonsHTML = '';

        lessons.forEach((lesson, index) => {
            allLessonsHTML += `
                <div class="lesson">
                    <h2>${lesson.title}</h2>
                    <ul>
            `;

            lesson.phrases.forEach(phrase => {
                allLessonsHTML += `<li>${phrase.english} - ${phrase.vietnamese}</li>`;
            });

            allLessonsHTML += `
                    </ul>
                </div>
            `;

            // Update the lesson index
            currentLessonIndex = index;
            updateLessonIndex();
        });

        lessonsContainer.innerHTML = allLessonsHTML;
    }

    function updateLessonIndex() {
        lessonIndexContainer.innerText = `Lesson ${currentLessonIndex + 1}/${lessons.length}`;
    }

    prevButton.addEventListener('click', function () {
        if (currentLessonIndex > 0) {
            currentLessonIndex--;
            updateLessonIndex();
        }
    });

    nextButton.addEventListener('click', function () {
        if (currentLessonIndex < lessons.length - 1) {
            currentLessonIndex++;
            updateLessonIndex();
        }
    });

    // Initial rendering
    renderAllLessons();
});
// Additional Lessons
const additionalLessons = [
  {
    title: "Lesson 6: Everyday Activities",
    phrases: [
      { english: "Wake up", vietnamese: "Thức dậy" },
      { english: "Brush teeth", vietnamese: "Đánh răng" },
      { english: "Take a shower", vietnamese: "Tắm" },
      { english: "Have breakfast", vietnamese: "Ăn sáng" },
      { english: "Go to work", vietnamese: "Đi làm" }
    ]
  },
  {
    title: "Lesson 7: Weather",
    phrases: [
      { english: "Sunny", vietnamese: "Nắng" },
      { english: "Cloudy", vietnamese: "Âm u" },
      { english: "Rainy", vietnamese: "Mưa" },
      { english: "Snowy", vietnamese: "Tuyết" },
      { english: "Wind", vietnamese: "Gió" }
    ]
  },
  {
    title: "Lesson 8: At the Restaurant",
    phrases: [
      { english: "Table for two, please", vietnamese: "Bàn cho hai người, làm ơn" },
      { english: "Menu, please", vietnamese: "Thực đơn, làm ơn" },
      { english: "I would like a water", vietnamese: "Tôi muốn một ly nước" },
      { english: "The bill, please", vietnamese: "Hóa đơn, làm ơn" },
      { english: "Delicious", vietnamese: "Ngon" }
    ]
  },
  {
    title: "Lesson 9: Directions",
    phrases: [
      { english: "Where is the bank?", vietnamese: "Ngân hàng ở đâu?" },
      { english: "Turn left", vietnamese: "Rẽ trái" },
      { english: "Turn right", vietnamese: "Rẽ phải" },
      { english: "Straight ahead", vietnamese: "Thẳng đi" },
      { english: "Stop here", vietnamese: "Dừng lại ở đây" }
    ]
  },
  {
    title: "Lesson 10: Emotions",
    phrases: [
      { english: "Happy", vietnamese: "Vui" },
      { english: "Sad", vietnamese: "Buồn" },
      { english: "Angry", vietnamese: "Tức giận" },
      { english: "Surprised", vietnamese: "Ngạc nhiên" },
      { english: "Tired", vietnamese: "Mệt mỏi" }
    ]
  }
];

// Combine the original and additional lessons
const allLessons = lessons.concat(additionalLessons);
// More Additional Lessons
const moreAdditionalLessons = [
  {
    title: "Lesson 11: Around the House",
    phrases: [
      { english: "Living room", vietnamese: "Phòng khách" },
      { english: "Bedroom", vietnamese: "Phòng ngủ" },
      { english: "Kitchen", vietnamese: "Nhà bếp" },
      { english: "Bathroom", vietnamese: "Phòng tắm" },
      { english: "Balcony", vietnamese: "Ban công" }
    ]
  },
  {
    title: "Lesson 12: Hobbies and Activities",
    phrases: [
      { english: "Read a book", vietnamese: "Đọc sách" },
      { english: "Watch a movie", vietnamese: "Xem phim" },
      { english: "Play a musical instrument", vietnamese: "Chơi nhạc cụ" },
      { english: "Gardening", vietnamese: "Làm vườn" },
      { english: "Traveling", vietnamese: "Du lịch" }
    ]
  },
  {
    title: "Lesson 13: Health and Wellness",
    phrases: [
      { english: "Exercise regularly", vietnamese: "Tập thể dục đều đặn" },
      { english: "Eat a balanced diet", vietnamese: "Ăn uống cân đối" },
      { english: "Get enough sleep", vietnamese: "Đủ giấc ngủ" },
      { english: "Stay hydrated", vietnamese: "Giữ cơ thể đủ nước" },
      { english: "Relax and unwind", vietnamese: "Thư giãn và nghỉ ngơi" }
    ]
  },
  {
    title: "Lesson 14: Shopping Phrases",
    phrases: [
      { english: "How much does it cost?", vietnamese: "Bao nhiêu tiền?" },
      { english: "I would like to buy this", vietnamese: "Tôi muốn mua cái này" },
      { english: "Do you have it in a different color?", vietnamese: "Có màu khác không?" },
      { english: "Can I try it on?", vietnamese: "Tôi có thể thử không?" },
      { english: "It's too expensive", vietnamese: "Nó quá đắt" }
    ]
  },
  {
    title: "Lesson 15: Celebrations and Festivals",
    phrases: [
      { english: "Happy birthday!", vietnamese: "Chúc mừng sinh nhật!" },
      { english: "Merry Christmas!", vietnamese: "Chúc mừng Giáng Sinh!" },
      { english: "Happy New Year!", vietnamese: "Chúc mừng năm mới!" },
      { english: "Congratulations!", vietnamese: "Chúc mừng!" },
      { english: "Best wishes!", vietnamese: "Chúc mọi điều tốt lành!" }
    ]
  }
];

// Combine all lessons
const allLessonsExtended = allLessons.concat(moreAdditionalLessons);
// Even More Additional Lessons
const evenMoreAdditionalLessons = [
  {
    title: "Lesson 16: Transportation",
    phrases: [
      { english: "Take the bus", vietnamese: "Đi xe bus" },
      { english: "Ride a bike", vietnamese: "Đi xe đạp" },
      { english: "Drive a car", vietnamese: "Lái xe ô tô" },
      { english: "Walk to work", vietnamese: "Đi bộ đến nơi làm việc" },
      { english: "Book a taxi", vietnamese: "Đặt taxi" }
    ]
  },
  {
    title: "Lesson 17: Technology Terms",
    phrases: [
      { english: "Smartphone", vietnamese: "Điện thoại thông minh" },
      { english: "Computer", vietnamese: "Máy tính" },
      { english: "Internet", vietnamese: "Internet" },
      { english: "Social media", vietnamese: "Mạng xã hội" },
      { english: "Email", vietnamese: "Email" }
    ]
  },
  {
    title: "Lesson 18: Expressing Preferences",
    phrases: [
      { english: "I prefer tea over coffee", vietnamese: "Tôi thích trà hơn cà phê" },
      { english: "I love watching movies", vietnamese: "Tôi thích xem phim" },
      { english: "I enjoy playing sports", vietnamese: "Tôi thích chơi thể thao" },
      { english: "I don't like spicy food", vietnamese: "Tôi không thích đồ ăn cay" },
      { english: "I'm a fan of reading books", vietnamese: "Tôi là người hâm mộ đọc sách" }
    ]
  },
  {
    title: "Lesson 19: Job and Occupation",
    phrases: [
      { english: "I'm a teacher", vietnamese: "Tôi là giáo viên" },
      { english: "She works in IT", vietnamese: "Cô ấy làm trong lĩnh vực Công nghệ thông tin" },
      { english: "He is a doctor", vietnamese: "Anh ấy là bác sĩ" },
      { english: "I work in finance", vietnamese: "Tôi làm trong lĩnh vực tài chính" },
      { english: "She's an artist", vietnamese: "Cô ấy là nghệ sĩ" }
    ]
  },
  {
    title: "Lesson 20: Time Expressions",
    phrases: [
      { english: "Today", vietnamese: "Hôm nay" },
      { english: "Tomorrow", vietnamese: "Ngày mai" },
      { english: "Yesterday", vietnamese: "Hôm qua" },
      { english: "Next week", vietnamese: "Tuần sau" },
      { english: "Last month", vietnamese: "Tháng trước" }
    ]
  }
];

// Combine all lessons
const allLessonsEvenMore = allLessonsExtended.concat(evenMoreAdditionalLessons);
// Even More Additional Lessons
const evenMoreAdditionalLessons = [
  {
    title: "Lesson 21: Daily Routines",
    phrases: [
      { english: "Wake up early", vietnamese: "Thức dậy sớm" },
      { english: "Have a quick breakfast", vietnamese: "Ăn sáng nhanh" },
      { english: "Commute to work", vietnamese: "Đi làm" },
      { english: "Take a lunch break", vietnamese: "Nghỉ trưa" },
      { english: "Exercise in the evening", vietnamese: "Tập thể dục vào buổi tối" }
    ]
  },
  {
    title: "Lesson 22: Describing People",
    phrases: [
      { english: "Tall and slim", vietnamese: "Cao và gầy" },
      { english: "Short with curly hair", vietnamese: "Ngắn và tóc xoăn" },
      { english: "Friendly and outgoing", vietnamese: "Thân thiện và hướng ngoại" },
      { english: "Serious and focused", vietnamese: "Nghiêm túc và tập trung" },
      { english: "Fashionable and trendy", vietnamese: "Thời trang và theo xu hướng" }
    ]
  },
  {
    title: "Lesson 23: Expressing Opinions",
    phrases: [
      { english: "In my opinion", vietnamese: "Theo ý kiến của tôi" },
      { english: "I believe that", vietnamese: "Tôi tin rằng" },
      { english: "From my perspective", vietnamese: "Từ góc nhìn của tôi" },
      { english: "I disagree", vietnamese: "Tôi không đồng ý" },
      { english: "I agree with you", vietnamese: "Tôi đồng ý với bạn" }
    ]
  },
  {
    title: "Lesson 24: Travel Phrases",
    phrases: [
      { english: "Where is the nearest hotel?", vietnamese: "Khách sạn gần nhất ở đâu?" },
      { english: "Can you recommend a good restaurant?", vietnamese: "Bạn có thể giới thiệu một nhà hàng ngon không?" },
      { english: "I need a taxi to the airport", vietnamese: "Tôi cần một chiếc taxi đến sân bay" },
      { english: "What time is the next train?", vietnamese: "Mấy giờ có chuyến tàu tiếp theo?" },
      { english: "Is there a museum nearby?", vietnamese: "Có bảo tàng nào gần đây không?" }
    ]
  },
  {
    title: "Lesson 25: Relationships",
    phrases: [
      { english: "Close friends", vietnamese: "Bạn thân" },
      { english: "Siblings", vietnamese: "Anh chị em" },
      { english: "Long-distance relationship", vietnamese: "Mối quan hệ xa cách" },
      { english: "Supportive partner", vietnamese: "Đối tác hỗ trợ" },
      { english: "Family reunion", vietnamese: "Họp mặt gia đình" }
    ]
  }
];

// Combine all lessons
const allLessonsEvenMore = allLessonsEvenMore.concat(evenMoreAdditionalLessons);
