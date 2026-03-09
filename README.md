
---

# ❓ JavaScript Questions & Answers

### 1️⃣ What is the difference between `var`, `let`, and `const`?
        var => একই নামে বারবার ডিক্লেয়ার করা যায় এতে কোনো error আসে না।
        let => let দিয়ে মান আপডেট করা যায় কোনো error আসে না। 
        const => const এর মান একবার সেট করলে আর পরিবর্তন করা যায় না এবং নতুন করে declarer করা যায় না
---

### 2️⃣ What is the spread operator `(...)`?

      Spread Operator (...) হলো JavaScript এর একটি operator যেটা array বা object এর element গুলোকে expand করে। এটি সাধারণত array/object copy করা, merge করা বা নতুন element add করার জন্য ব্যবহার করা হয়।t arr2 = [...arr1,4,5];

---

### 3️⃣ What is the difference between `map()`, `filter()`, and `forEach()`?
        map(), filter(),forEach() - javascript method work different :
        map() => array এর প্রতিটি element  এর উপর operation চালায়।  তারপর একটি array return করে। 
        filter () => condition অনুযায়ী element   নেয়। condition true হলে সেই element নিয়ে নতুন filtered array return  করে।
        forEach() => array এর প্রতিটি element এর উপর loop  চালায় কোনো নতুন array return করে না undefined return   করে।

---

### 4️⃣ What is an arrow function?

       js এর arrow  function দিয়ে ছোটকরে function লেখা যায়,এ function এ   =>  চিহ্ন  ব্যবহার করা হয়।

---

### 5️⃣ What are template literals?
      Template literals দিয়ে js এ string লেখা যায় যেখানে  backtick ( ) ব্যবহার করা যায় এবং ভিতরে variable সহজে বসানো যায়।
---


# 🚀 GitHub Issues Tracker

A simple **GitHub Issues Tracker** built using **HTML, TailwindCSS, DaisyUI, and Vanilla JavaScript**.
Users can view issues, filter them by status, search issues, and see detailed information in a modal.

---

# 📌 Features

✅ Login system with demo credentials
✅ View all issues from API
✅ Filter issues by **All / Open / Closed** tabs
✅ Search issues using API
✅ Issue details modal
✅ Dynamic issue count
✅ Loading spinner while fetching data
✅ Active tab highlighting
✅ Responsive design for mobile devices
✅ Category based card border color

---

# 🖥️ Live Demo

🔗 **Live Site:**
[https://github-issue-tracker-project.vercel.app](https://github-issue-tracker-project.vercel.app)

🔗 **GitHub Repository:**
[https://github.com/tishadey45/github-issue-tracker](https://github.com/tishadey45/github-issue-tracker)

---

# 🔑 Demo Credentials

```text
Username: admin
Password: admin123
```

---

# ⚙️ API Endpoints

### 📄 Get All Issues

```
https://phi-lab-server.vercel.app/api/v1/lab/issues
```

### 📄 Get Single Issue

```
https://phi-lab-server.vercel.app/api/v1/lab/issue/{id}
```

Example:

```
https://phi-lab-server.vercel.app/api/v1/lab/issue/33
```

### 🔎 Search Issues

```
https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q={searchText}
```

Example:

```
https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=notifications
```

---

# 🛠️ Technology Stack

* **HTML**
* **Tailwind CSS**
* **DaisyUI**
* **JavaScript (Vanilla)**
* **Vercel (Deployment)**

---

# 🎨 UI Sections

## 🔐 Login Page

* Logo
* Title and subtitle
* Username & password input
* Sign-in button
* Demo credentials

---

## 🏠 Main Page

### Navbar

* Website logo/name
* Search input and search button

---

### Tab Section

Three tabs:

* **All**
* **Open**
* **Closed**

By default, **All Issues** are shown.

---

### Issue Card Information

Each issue card displays:

* Title
* Description
* Status
* Category
* Author
* Priority
* Labels
* Created Date

Clicking on an issue title opens a **modal** showing full issue details.

---

# 🚀 Challenges Implemented

✔ Card **Top Border Color**

* 🟢 Open Issue → Green Border
* 🟣 Closed Issue → Purple Border

✔ **Loading Spinner** while fetching API data

✔ **Active Tab Button** when switching categories

✔ **Search Functionality**

✔ **Responsive Layout**

✔ **Meaningful GitHub Commits**

---

# 📤 Submission

**GitHub Repo:**
[https://github.com/tishadey45/github-issue-tracker](https://github.com/tishadey45/github-issue-tracker)

**Live Site:**
[https://github-issue-tracker-project.vercel.app](https://github-issue-tracker-project.vercel.app)

---
