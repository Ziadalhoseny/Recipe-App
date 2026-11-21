import { onMounted } from "vue";

export interface SavedRecipe {
  id: number;
  name: string;
  image: string;
  cookTimeMinutes: number;
  caloriesPerServing: number;
  rating: number;
  reviewCount: number;
  [key: string]: unknown;
}

const STORAGE_KEY = "recipego:saved-recipes:v1";

function isSavedRecipe(value: unknown): value is SavedRecipe {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  return (
    "id" in value &&
    typeof value.id === "number" &&
    "name" in value &&
    typeof value.name === "string" &&
    "image" in value &&
    typeof value.image === "string" &&
    "cookTimeMinutes" in value &&
    typeof value.cookTimeMinutes === "number" &&
    "caloriesPerServing" in value &&
    typeof value.caloriesPerServing === "number" &&
    "rating" in value &&
    typeof value.rating === "number" &&
    "reviewCount" in value &&
    typeof value.reviewCount === "number"
  );
}

export function useSavedRecipes() {
  const savedRecipes = useState<SavedRecipe[]>("saved-recipes", () => []);
  const isInitialized = useState<boolean>(
    "saved-recipes-initialized",
    () => false,
  );
  const storageError = useState<string | null>(
    "saved-recipes-storage-error",
    () => null,
  );

  onMounted(() => {
    if (isInitialized.value) {
      return;
    }

    try {
      const savedValue = localStorage.getItem(STORAGE_KEY);
      if (savedValue) {
        const parsedValue: unknown = JSON.parse(savedValue);
        if (!Array.isArray(parsedValue)) {
          throw new TypeError("Saved recipes must be stored as an array.");
        }

        savedRecipes.value = parsedValue.filter(isSavedRecipe);
        if (savedRecipes.value.length !== parsedValue.length) {
          storageError.value =
            "Some saved recipes could not be restored from this device.";
        }
      }
    } catch (error) {
      storageError.value =
        "Saved recipes could not be loaded from this device.";
      console.error("[useSavedRecipes] Failed to load saved recipes.", error);
    }

    isInitialized.value = true;
  });

  function persistSavedRecipes() {
    if (!import.meta.client) {
      return;
    }

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(savedRecipes.value));
      storageError.value = null;
    } catch (error) {
      storageError.value =
        "Changes to saved recipes could not be stored on this device.";
      console.error("[useSavedRecipes] Failed to persist saved recipes.", error);
    }
  }

  function isSaved(id: number) {
    return savedRecipes.value.some((recipe) => recipe.id === id);
  }

  function saveRecipe(recipe: SavedRecipe) {
    if (isSaved(recipe.id)) {
      return;
    }

    savedRecipes.value = [...savedRecipes.value, recipe];
    persistSavedRecipes();
  }

  function removeRecipe(id: number) {
    if (!isSaved(id)) {
      return;
    }

    savedRecipes.value = savedRecipes.value.filter(
      (recipe) => recipe.id !== id,
    );
    persistSavedRecipes();
  }

  function toggleSaved(recipe: SavedRecipe) {
    if (isSaved(recipe.id)) {
      removeRecipe(recipe.id);
    } else {
      saveRecipe(recipe);
    }
  }

  return {
    savedRecipes,
    isInitialized,
    storageError,
    isSaved,
    saveRecipe,
    removeRecipe,
    toggleSaved,
  };
}
