"""
URL configuration for ssr_demo_stjg project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/6.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import RedirectView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('catalogo/', include('catalogo_stjg.urls')),

    # Redirige la ruta principal http://127.0.0.1:8000/ directamente al catálogo
    path('', RedirectView.as_view(url='/catalogo/', permanent=False)),
]

# Esto permite que Django sirva los archivos CSS e Imágenes desde la raíz del proyecto
if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.BASE_DIR.parent / 'css')
    urlpatterns += static(settings.STATIC_URL, document_root=settings.BASE_DIR.parent / 'img')
    urlpatterns += static(settings.STATIC_URL, document_root=settings.BASE_DIR.parent / 'js')