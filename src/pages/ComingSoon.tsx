import { useState, useEffect } from "react";
import { Leaf, ArrowLeft, Mail, Bell, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

const ComingSoon = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fromPhone, setFromPhone] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [originalPhone, setOriginalPhone] = useState(""); // tracks the phone to replace when editing
  const { state } = useLocation() as any;
  const source = state?.source ?? "direct";

  useEffect(() => {
    const incomingPhone = state?.phone ?? "";
    const incomingOldPhone = state?.oldPhone ?? null;
    const stored = (() => {
      try {
        return localStorage.getItem("preferredPhone") ?? "";
      } catch (e) {
        return "";
      }
    })();

    const resolved = incomingPhone || stored;
    if (resolved) {
      setFromPhone(resolved);
      setPhone(resolved);
      // Only auto-submit if phone is passed in navigation state (from Hero)
      if (state?.phone && !isSubmitted) {
        try {
          localStorage.setItem("preferredPhone", resolved);
        } catch (e) {
          // ignore storage errors
        }
        (async () => {
          try {
            // If oldPhone is provided, use update endpoint to replace old with new
            if (incomingOldPhone && incomingOldPhone !== resolved) {
              const res = await fetch("https://vanngon.onrender.com/api/update-contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ oldPhone: incomingOldPhone, newPhone: resolved, source }),
              });
              if (!res.ok) {
                console.warn("Failed to update contact", await res.text());
                toast({ title: "Saved locally", description: "Could not reach the server — saved locally." });
              }
            } else {
              // No old phone, just save as new
              const res = await fetch("https://vanngon.onrender.com/api/save-contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ phone: resolved, source }),
              });
              if (!res.ok) {
                console.warn("Failed to save contact", await res.text());
                toast({ title: "Saved locally", description: "Could not reach the server — saved locally." });
              }
            }
          } catch (err) {
            console.warn("Network error saving contact", err);
            toast({ title: "Saved locally", description: "Could not reach the server — saved locally." });
          }
        })();
        setIsSubmitted(true);
      }
      // If phone is only in localStorage, do NOT auto-submit, just show the registered state
      else if (stored && !state?.phone) {
        setIsSubmitted(true);
      }
    }
  }, [state]);

  // Vietnamese phone: starts with 0, 10 digits, or +84 and 9 digits
  // Vietnamese phone: starts with 0 or +84, followed by 3,5,7,8,9 and 8 digits
  // Valid prefixes: 03, 05, 07, 08, 09 or +843, +845, +847, +848, +849
  function isValidVietnamesePhone(phone: string) {
    return /^((\+84|0)(3|5|7|8|9)\d{8})$/.test(phone);
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const toSend = phone?.trim();
    if (!toSend || !isValidVietnamesePhone(toSend)) {
      toast({ title: "Invalid phone number", description: "Please enter a valid Vietnamese phone number." });
      return;
    }
    
    // Use originalPhone when editing, which was captured when user clicked edit
    const oldPhone = isEditing && originalPhone && originalPhone !== toSend ? originalPhone : null;
    
    // persist locally so user sees they're registered after reload
    try {
      localStorage.setItem("preferredPhone", toSend);
    } catch (e) {
      // ignore storage errors
    }

    // optimistic UI
    setFromPhone(toSend);
    setOriginalPhone("");
    setIsEditing(false);
    setIsSubmitted(true);

    // send phone to backend if available (best-effort) and report failures
    (async () => {
      try {
        // If there was an old phone, use update endpoint to replace it
        if (oldPhone) {
          const res = await fetch("https://vanngon.onrender.com/api/update-contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ oldPhone, newPhone: toSend, source }),
          });
          if (!res.ok) {
            console.warn("Failed to update contact", await res.text());
            toast({ title: "Saved locally", description: "Could not reach the server — saved locally." });
          }
        } else {
          const res = await fetch("https://vanngon.onrender.com/api/save-contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ phone: toSend, source }),
          });
          if (!res.ok) {
            console.warn("Failed to save contact", await res.text());
            toast({ title: "Saved locally", description: "Could not reach the server — saved locally." });
          }
        }
      } catch (err) {
        console.warn("Network error saving contact", err);
        toast({ title: "Saved locally", description: "Could not reach the server — saved locally." });
      }
    })();
  };

  

  return (
    <div className="min-h-screen gradient-hero flex flex-col page-fade">
      {/* Header */}
      <header className="container py-6">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Quay lại trang chủ
        </button>
      </header>

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="max-w-xl w-full text-center">
          {/* Logo */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm mb-8 animate-float">
            <Leaf className="w-10 h-10 text-primary-foreground" />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary rounded-full px-4 py-2 text-secondary-foreground text-sm font-medium mb-6">
            <Bell className="w-4 h-4" />
            Ra mắt tháng 01 năm 2026
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
            Sắp ra mắt!
          </h1>

          {isSubmitted ? (
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-md mx-auto">
            </p>
          ) : (
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-md mx-auto">
              ⚠️ Các túi hiển thị chỉ là ví dụ — hiện tại bạn cần đăng ký để được mở quyền mua khi ra mắt.

              Số lượng người dùng giới hạn! Hãy là những người đầu tiên tiết kiệm thực phẩm ngon và giảm lãng phí ở Hà Nội. 
              
              Nhập số điện thoại để nhận thông báo qua Zalo khi chúng tôi ra mắt.
            </p>
          )}

          {/* Phone form */}
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              {isEditing && originalPhone && (
                <p className="text-sm text-primary-foreground/80 mb-4 text-center">
                  Đang sửa số: <strong>{originalPhone}</strong>
                </p>
              )}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="tel"
                    inputMode="tel"
                    value={phone}
                    onChange={(e) => {
                      // allow only digits and plus at the start
                      let val = e.target.value;
                      if (val.startsWith('+')) {
                        val = '+' + val.slice(1).replace(/\D/g, "");
                      } else {
                        val = val.replace(/\D/g, "");
                      }
                      setPhone(val);
                    }}
                    placeholder="Nhập số điện thoại của bạn"
                    className="w-full h-14 pl-12 pr-4 rounded-xl bg-card text-foreground placeholder:text-muted-foreground shadow-card focus:outline-none focus:ring-2 focus:ring-secondary"
                    required
                  />
                </div>
                <Button type="submit" variant="warm" size="lg" disabled={!phone || !isValidVietnamesePhone(phone)}>
                  {isEditing ? "Cập nhật" : "Đăng ký"}
                </Button>
              </div>
            </form>
          ) : (
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto">
              <div className="w-16 h-16 rounded-full bg-secondary mx-auto mb-4 flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-secondary-foreground" />
              </div>
              <h2 className="text-2xl font-bold text-primary-foreground mb-2">
                Bạn đã có trong danh sách!
              </h2>
              <p className="text-primary-foreground/80 mb-2">
                Chúng tôi sẽ gửi SMS cho bạn khi Vẫn Ngon ra mắt tại Hà Nội. Hãy sẵn sàng để tiết kiệm!
              </p>
              {fromPhone && (
                <p className="text-sm text-primary-foreground/60 mb-4">
                  Số điện thoại: <strong>{fromPhone}</strong>
                </p>
              )}
              <button
                type="button"
                onClick={() => {
                  setOriginalPhone(fromPhone); // capture the current phone to replace
                  setIsEditing(true);
                  setIsSubmitted(false);
                  setPhone(fromPhone);
                }}
                className="text-sm text-primary-foreground/70 hover:text-primary-foreground underline underline-offset-2 transition-colors"
              >
                Sửa số điện thoại
              </button>
            </div>
          )}

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-16">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary-foreground">100+</p>
              <p className="text-sm text-primary-foreground/70">Người đang chờ</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary-foreground">10+</p>
              <p className="text-sm text-primary-foreground/70">Cửa hàng đối tác</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary-foreground">2</p>
              <p className="text-sm text-primary-foreground/70">Thành phố sắp ra mắt</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container py-6 text-center">
        <p className="text-sm text-primary-foreground/60">
          © 2026 Vẫn Ngon. Cùng chống lãng phí thực phẩm.
        </p>
      </footer>
    </div>
  );
};

export default ComingSoon;
