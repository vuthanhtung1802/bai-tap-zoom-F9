/*
1. Viết hàm investmentDecision để quyết định xem có nên đầu tư vào một dự án không. Đầu tư nếu dự án có rủi ro thấp hoặc trung bình và ROI (Return on Investment) dự kiến trên 10%, hoặc nếu dự án có rủi ro cao nhưng ROI trên 20%.
2. Viết hàm determineTravelPlan để xác định kế hoạch du lịch dựa trên thời tiết, ngân sách, và sở thích cá nhân. Nếu thời tiết tốt, ngân sách từ 5000 trở lên và thích phiêu lưu, chọn “Du lịch núi”; nếu không thích phiêu lưu, chọn “Du lịch biển”. Nếu ngân sách nhỏ hơn 5000, chọn “Khám phá địa phương”. Nếu thời tiết xấu, luôn chọn “Hoãn kế hoạch”.
3. Viết hàm determineStudentCategory để xác định loại học viên dựa trên điểm thi và tỷ lệ tham gia lớp học. Điều kiện phân loại như sau:
    * “Xuất sắc” nếu điểm từ 90 trở lên, và có mặt ít nhất 50% các buổi.
    * “Giỏi” nếu điểm từ 75 trở lên, và có mặt ít nhất 70% các buổi.
    * “Khá” nếu điểm từ 60 trở lên, và có mặt ít nhất 60% các buổi.
    * “Trung bình” nếu điểm dưới 60, hoặc vắng mặt quá 40% các buổi.
    * “Cần cải thiện” nếu vắng mặt quá 50% các buổi, bất kể điểm số.
4. Viết hàm hasAccessToWorkroom để kiểm tra xem một nhân viên có quyền truy cập vào phòng làm việc hay không. Điều kiện:
    * Là quản lý (manager), hoặc:
    * Có thẻ truy cập và đã hoàn thành bài kiểm tra an toàn.
*/

// bai 1
// cach 1
function investmentDecision(riskLevel, roi) {

  if ((riskLevel == "low" || riskLevel == "medium") && roi > 0.1) return true

  else if (riskLevel == "high" && roi > 0.20) return true

  else return false
}
// investmentDecision("low", 20); // ==> true

// cach 2
function investmentDecision(riskLevel, roi) {
  if ((riskLevel == "low" || riskLevel == "medium") && roi > 0.1) return true

  if (riskLevel == "high" && roi > 0.20) return true

  return false
}
// bai 2
// cach 1
function determineTravelPlan(badWeather, budget, preferences) {
  if (badWeather) return "Hoãn kế hoạch";

  if (budget >= 5000) return preferences ? "Du lich nui" : "Du lich bien";

  return "Khám phá địa phương";
}
// determineTravelPlan(false, 6000, true);

// cach 2
function determineTravelPlan(badWeather, budget, preferences) {
  if (badWeather) return "Hoãn kế hoạch";

  if (budget >= 5000) {
    if (preferences) return `Du lich nui`
    return `Du lich bien`
  }

  return "Khám phá địa phương";
}
// bai 3
function determineStudentCategory(score, attendanceRate) {
  if (attendanceRate < 0.5) return "Cần cải thiện";

  if (score >= 90 && attendanceRate >= 0.5) return "Xuất sắc";

  if (score >= 75 && attendanceRate >= 0.7) return "Giỏi";

  if (score >= 60 && attendanceRate >= 0.6) return "Khá";

  if (score < 60 || attendanceRate < 0.6) return "Trung bình";

  return "Không xác định";
}

// cach 2
function determineStudentCategory(score, attendanceRate) {
  switch (true) {
    case (attendanceRate < 0.5):
      return "Cần cải thiện";
    case (score >= 90 && attendanceRate >= 0.5):
      return "Xuất sắc";
    case (score >= 75 && attendanceRate >= 0.7):
      return "Giỏi";
    case (score >= 60 && attendanceRate >= 0.6):
      return "Khá";
    case (score < 60 || attendanceRate < 0.6):
      return "Trung bình";
    default:
      return "Không xác định";
  }
}

// bai 4
// cach 1
function hasAccessToWorkroom(isManager, hasAccessCard, passedSafetyTest) {
  return isManager || (hasAccessCard && passedSafetyTest);
}

// cach 2
function hasAccessToWorkroom(isManager, hasAccessCard, passedSafetyTest) {
  if (isManager) return true;
  if (hasAccessCard && passedSafetyTest) return true;
  return false;
}
// hasAccessToWorkroom(true, true, true) // -> true
