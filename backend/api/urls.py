from . import views
from rest_framework.routers import SimpleRouter

router = SimpleRouter()
router.register("", views.PostViewSet, "posts")

urlpatterns = router.urls