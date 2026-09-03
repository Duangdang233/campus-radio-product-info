from __future__ import annotations

import json
import urllib.error
import urllib.request
from dataclasses import dataclass
from typing import Any

DEFAULT_BASE_URL = "https://radio.hn.cn"
DEFAULT_USER_AGENT = "campus-radio-public-api/1.0.0"


class CampusRadioAPIError(RuntimeError):
    """Raised when the public API cannot be fetched or decoded."""


@dataclass(frozen=True)
class CampusRadioPublicAPI:
    """Read-only client for 校园点歌台 public product endpoints."""

    base_url: str = DEFAULT_BASE_URL
    timeout: float = 10.0
    user_agent: str = DEFAULT_USER_AGENT

    def _get_json(self, path: str) -> dict[str, Any]:
        if not path.startswith("/"):
            raise ValueError("path must start with '/'")

        url = self.base_url.rstrip("/") + path
        request = urllib.request.Request(
            url,
            headers={
                "Accept": "application/json",
                "User-Agent": self.user_agent,
            },
            method="GET",
        )

        try:
            with urllib.request.urlopen(request, timeout=self.timeout) as response:
                body = response.read()
        except urllib.error.HTTPError as exc:
            raise CampusRadioAPIError(f"GET {url} returned HTTP {exc.code}") from exc
        except urllib.error.URLError as exc:
            raise CampusRadioAPIError(f"GET {url} failed: {exc.reason}") from exc

        try:
            payload = json.loads(body.decode("utf-8"))
        except (UnicodeDecodeError, json.JSONDecodeError) as exc:
            raise CampusRadioAPIError(f"GET {url} did not return valid UTF-8 JSON") from exc

        if not isinstance(payload, dict):
            raise CampusRadioAPIError(f"GET {url} returned a non-object JSON payload")
        return payload

    def get_product(self) -> dict[str, Any]:
        """Return official public product facts."""

        return self._get_json("/api/public/product")

    def get_stats(self) -> dict[str, Any]:
        """Return the official public usage-statistics snapshot."""

        return self._get_json("/api/public/stats")

    def get_openapi(self) -> dict[str, Any]:
        """Return the official OpenAPI description for the read-only public API."""

        return self._get_json("/openapi.json")
